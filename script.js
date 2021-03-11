let sectionn = document.querySelector("section");
let clickMe = document.querySelector("button");
let bg = document.querySelector(".container-up").children[0].children[0];



let array = ["red", "blue","rgba(133, 122, 200)"]

console.log();

const randomNumber =()=>{
    return Math.floor(Math.random()*array.length);
}

clickMe.addEventListener("click",()=>{
    const random  = randomNumber();
    console.log(bg.textContent=array[random]);
    sectionn.style.backgroundColor=array[random];
})
