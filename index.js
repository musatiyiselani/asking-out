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
        nbtn.style.position = "absolute";
        nbtn.style.right = "30.5%";
        ybtn.style.transform += `scale(${1.1})`;
        nbtn.innerHTML = "Really?"
    }
    else if(count === 2) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "21%";
        ybtn.style.transform += `scale(${1.2})`;
        nbtn.innerHTML = "Are you sure?"
    }
    else if(count === 3) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "9%";
        ybtn.style.transform += `scale(${1.3})`;
        nbtn.innerHTML = "Please, it will be fun!"
    }
    else if(count === 4) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.4})`;
        nbtn.innerHTML = "Are you serious? Really!"
    }
    else if(count === 5) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.5})`;
        nbtn.innerHTML = "I promise you will love it."
    }
    else if(count === 6) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.6})`;
        nbtn.innerHTML = "Come on! you will not regret."
    }
    else if(count === 7) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.7})`;
        nbtn.innerHTML = "PLEASE, PLEASE, PLEASE!"
    }
    else if(count === 8) {
        //nbtn.style.transform += `translateX(${120}px)`;
        ybtn.style.transform += `scale(${1.17})`;
    }
    
}


page1.style.display = "block";
page2.style.display = "none";


function swap() {
    page2.style.display = "block";
    page1.style.display = "none";
    confetti();
}