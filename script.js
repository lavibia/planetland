let btnContent=document.querySelector(".btn-content");

let planet= document.getElementById("title").textContent.toLowerCase();
console.log(planet);
//btnContent[i].classList.add
console.log(`active-${planet}`);
btnContent.classList.add(`active-${planet}`)
console.log(btnContent);

// for(let i=0;i<btnContent.length;i++){
//     btnContent[i].addEventListener("onclick",()=>{
        console.log(planet);
        //btnContent[i].classList.add
        console.log(`active-${planet}`);
//     })
// }