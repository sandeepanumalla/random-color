let array =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let sectionn = document.querySelector("section");
let clickMe = document.querySelector("button");
let bg = document.querySelector(".container-up").children[0].children[0];

clickMe.addEventListener("click",()=>{
    let hex = "#"
   
        for(let i=0;i<6;i++){
            let random = Math.floor(Math.random()*array.length);
            hex += array[random];
        }
    
    
    sectionn.style.backgroundColor=hex;
    bg.textContent=hex;
})