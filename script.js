let btnOverview=document.getElementById("btnOverview");
let btnStructure=document.getElementById("btnStructure");
let btnSurface=document.getElementById("btnSurface");


// const phoneMedia=window.matchMedia("(max-width: 767px)");

// phoneMedia.addEventListener("change", function(){
//       if (phoneMedia.matches) {
//             btnOverview.textContent='Overview';
//             btnStructure.textContent='Structure';
//             btnSurface='Surface';
//        }
//        else{
//              btnOverview.textContent='<span class="btn-text-number">01</span>OVERVIEW';
//              btnStructure.textContent='<span class="btn-text-number">02</span>INTERNAL STRUCTURE';
//              btnSurface.textContent='<span class="btn-text-number">03</span>SURFACE GEOLOGY';
//        } 
       
// })



let btnContent=document.querySelector(".btn-content");

let planet= document.getElementById("title").textContent.toLowerCase();

console.log(planet);
//btnContent[i].classList.add
console.log(`active-${planet}`);
btnContent.style.borderBottom =`3px solid var(--color-${planet})`
console.log(btnContent);

// for(let i=0;i<btnContent.length;i++){
//     btnContent[i].addEventListener("onclick",()=>{
        console.log(planet);
        //btnContent[i].classList.add
        console.log(`active-${planet}`);
//     })
// }
//



/* ideas for the set active button


look for when a button is clicked

functon set active button
-add bg-planet clas to the button clicked, remove bg-planet for the other button

function display image
  if the first button is clicked
  IMAGE
        display the first image
        hide the second and third image
  CONTENT
        display the first div content
        hide the second and third div
  if the second button is clicked
  IMAGE
        display the second image
        hide the first and third image
  CONTENT
     display the second div content
     hide the first and third div
  if the third button is clicked
  IMAGE
        display the first and third image
        hide the second iamge
  CONTENT
        display the third div content
     hide the first and the second div

     keep buttons and content and images in arrays for easier acces and 


     leaga cumva contentul care trebuie afisat
     imaginile si textul in functie de categorie
     display(categorie)

     functie if(categorie display)
     else hide
*/