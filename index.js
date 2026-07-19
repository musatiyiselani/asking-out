let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");

let ybtn = document.getElementById("ybtn");
let nbtn = document.getElementById("nbtn");

let text = document.getElementById("text");

let count = 0;


function moveAndGrow() {

    count++;

    if(count === 1) {
        nbtn.style.transform += `translateX(${4}px)`;
        ybtn.style.transform += `scale(${1.1})`;
        //ybtn.style.transform += `translateY(${1}px)`;
        nbtn.innerHTML = "Really?"
    }
    else if(count === 2) {
        nbtn.style.transform += `translateX(${8}px)`;
        ybtn.style.transform += `scale(${1.2})`;
        ybtn.style.transform += `translateY(${1}px)`;
        ybtn.style.transform += `translateX(${6}px)`;
        nbtn.innerHTML = "Are you sure?"
    }
    else if(count === 3) {
        nbtn.style.transform += `translateX(${10}px)`;
        ybtn.style.transform += `scale(${1.3})`;
       // ybtn.style.transform += `translateY(${1}px)`;
       nbtn.innerHTML = "Please, it will be fun!"
    }
    else if(count === 4) {
        nbtn.style.transform += `translateX(${28}px)`;
        ybtn.style.transform += `scale(${1.4})`;
        ybtn.style.transform += `translateY(${1}px)`;
        ybtn.style.transform += `translateX(${6}px)`;
        nbtn.innerHTML = "Are you serious?"
    }
    else if(count === 5) {
        nbtn.style.transform += `translateX(${22}px)`;
        ybtn.style.transform += `scale(${1.5})`;
        //ybtn.style.transform += `translateY(${1}px)`;
        nbtn.innerHTML = "I promise you will love it."
    }
    else if(count === 6) {
        nbtn.style.transform += `translateX(${68}px)`;
        ybtn.style.transform += `scale(${1.6})`;
        ybtn.style.transform += `translateY(${1}px)`;
        ybtn.style.transform += `translateX(${6}px)`;
        nbtn.innerHTML = "Come on! you will not regret."
    }
    else if(count === 7) {
        nbtn.style.transform += `translateX(${70}px)`;
        ybtn.style.transform += `scale(${1.7})`;
       // ybtn.style.transform += `translateY(${1}px)`;
       nbtn.innerHTML = "PLEASE, PLEASE, PLEASE!"
    }
    else if(count === 8) {
        nbtn.style.transform += `translateX(${120}px)`;
        ybtn.style.transform += `scale(${1.4})`;
        ybtn.style.transform += `translateX(${2.5}px)`;
        ybtn.style.transform += `translateY(${2}px)`;
    }
    
}


page1.style.display = "block";
page2.style.display = "none";


function swap() {
    page2.style.display = "block";
    page1.style.display = "none";
    confetti();
}