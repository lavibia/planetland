let btnOverview = document.getElementById("btnOverview");
let btnStructure = document.getElementById("btnStructure");
let btnSurface = document.getElementById("btnSurface");
let imgOverview = document.getElementById("img-overview");
let imgStructure = document.getElementById("img-internal");
let imgSurface = document.getElementById("img-geology");
let txtOverview = document.getElementById("overview-holder");
let txtStructure = document.getElementById("structure-holder");
let txtSurface = document.getElementById("geology-holder");


let hamburgerIcon = document.querySelector('.hamburger');
let phoneNav = document.querySelector(".phone-nav");
let content = document.querySelector(".content");
let desktopNavLinks = document.getElementsByClassName('nav')[0].children;
console.log(desktopNavLinks);
let planet = document.getElementById("title").textContent.toLowerCase();
const phoneMedia = window.matchMedia("(max-width: 767px)");


activateButton('overview');


//Planet color on nav item hover
for (let i = 0; i < desktopNavLinks.length; i++) {
  desktopNavLinks[i].setAttribute('onmouseenter', 'displayHoverNavColor(event.target)')
  desktopNavLinks[i].setAttribute('onmouseleave', 'displayHoverNavColor(event.target)')
}

function displayHoverNavColor() {
  if (event.type == "mouseenter") {
    //get the link planet to set the color
    let link = event.target.children[0].getAttribute('href');
    let planet = link.slice(2, link.lastIndexOf('.'))
    if (planet == 'index')
      planet = 'mercury'

    event.target.style.borderTop = `2px solid var(--color-${planet}`;
  } else {
    event.target.style.borderTop = '0px';
  }
}


//TOGGLE PHONE NAVIGATION
hamburgerIcon.addEventListener("click", () => {
  if (phoneNav.style.display == "flex") {
    hamburgerIcon.style.filter = 'none';
    phoneNav.style.display = "none"
  } else {
    phoneNav.style.display = "flex"
    phoneNav.style.left = 0;
    hamburgerIcon.style.filter = 'invert(21%) sepia(11%) saturate(1402%) hue-rotate(201deg) brightness(92%) contrast(89%)';
  }
})



//change buttons text on phone view

phoneMedia.addEventListener("change", function () {
  if (phoneMedia.matches) {
    btnOverview.innerHTML = 'OVERVIEW';
    btnStructure.innerHTML = 'STRUCTURE';
    btnSurface.innerHTML = 'SURFACE';
  }
  else {
    btnOverview.innerHTML = '<span class="btn-text-number">01</span>OVERVIEW';
    btnStructure.innerHTML = '<span class="btn-text-number">02</span>INTERNAL STRUCTURE';
    btnSurface.innerHTML = '<span class="btn-text-number">03</span>SURFACE GEOLOGY';
  }

})
phoneMedia.addEventListener("change", function () {
  Array(btnOverview, btnStructure, btnSurface).forEach(btn => {
    if (btn.classList.contains('active')) {
      console.log(btn)
      activateButton(btn.id.slice(3).toLowerCase());
    }
  });
})

//set active content
/* Click on button
- Change color button
- Remove color other button
- Display content matching button
- Hide content unmatching button
- Display image relevant
- Hide image irrelevant */

btnOverview.addEventListener('click', () => {
  activateButton('overview');
  showContent('overview');
  showImage('overview');
})
btnStructure.addEventListener('click', () => {
  activateButton('structure');
  showContent('structure');
  showImage('structure');
})
btnSurface.addEventListener('click', () => {
  activateButton('surface');
  showContent('surface');
  showImage('surface');
})


//change style on active buttons

function activateButton(topic) {
  if (phoneMedia.matches) {
    if (topic === "overview") {
      btnOverview.classList.remove(`bg-${planet}`)
      btnOverview.classList.add('active');
      btnOverview.style.borderBottom = `3px solid var(--color-${planet})`
      btnStructure.style.borderBottom = '1px solid var(--color-light)';
      btnSurface.style.borderBottom = '1px solid var(--color-light)';
    } else if (topic === "structure") {
      btnStructure.classList.remove(`bg-${planet}`)
      btnStructure.classList.add('active');
      btnStructure.style.borderBottom = `3px solid var(--color-${planet})`
      btnOverview.style.borderBottom = '1px solid var(--color-light)';
      btnSurface.style.borderBottom = '1px solid var(--color-light)';
    } else {
      btnSurface.classList.remove(`bg-${planet}`)
      btnSurface.classList.add('active');
      btnSurface.style.borderBottom = `3px solid var(--color-${planet})`
      btnStructure.style.borderBottom = '1px solid var(--color-light)';
      btnOverview.style.borderBottom = '1px solid var(--color-light)';
    }
  }
  else {
    if (topic === "overview") {
      btnOverview.style.borderBottom = '1px solid var(--color-light)';
      btnOverview.classList.add(`bg-${planet}`, 'active');
      btnStructure.classList.remove(`bg-${planet}`, 'active');
      btnSurface.classList.remove(`bg-${planet}`, 'active');
    } else if (topic === "structure") {
      btnStructure.style.borderBottom = '1px solid var(--color-light)';
      btnOverview.classList.remove(`bg-${planet}`, 'active');
      btnStructure.classList.add(`bg-${planet}`, 'active');
      btnSurface.classList.remove(`bg-${planet}`, 'active');
    } else {
      btnSurface.style.borderBottom = '1px solid var(--color-light)';
      btnOverview.classList.remove(`bg-${planet}`, 'active');
      btnStructure.classList.remove(`bg-${planet}`, 'active');
      btnSurface.classList.add(`bg-${planet}`, 'active');
    }
  }
}

function showImage(topic) {
  if (topic === "overview") {
    imgOverview.classList.remove('hidden');
    // imgOverview.classList.add('show');
    imgStructure.classList.add('hidden');
    imgSurface.classList.add('hidden');
  } else if (topic === "structure") {
    imgOverview.classList.add('hidden');
    imgStructure.classList.remove('hidden');
    imgSurface.classList.add('hidden');
  } else {
    imgOverview.classList.remove('hidden');
    imgStructure.classList.add('hidden');
    imgSurface.classList.remove('hidden');
  }
}
function showContent(topic) {
  if (topic === 'overview') {
    txtOverview.classList.remove('hidden');
    txtStructure.classList.add('hidden');
    txtSurface.classList.add('hidden');
  } else if (topic === 'structure') {
    txtOverview.classList.add('hidden');
    txtStructure.classList.remove('hidden');
    txtSurface.classList.add('hidden');
  } else {
    txtOverview.classList.add('hidden');
    txtStructure.classList.add('hidden');
    txtSurface.classList.remove('hidden');
  }
}
