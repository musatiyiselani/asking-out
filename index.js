let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");

let ybtn = document.getElementById("ybtn");
let nbtn = document.getElementById("nbtn");

let text = document.getElementById("text");
let count = 0;

const song = document.getElementById("song");
song.volume = 0.5;

function startMusic() {
    song.currentTime = 4;
    song.play().catch(err => console.log(err));
}

ybtn.addEventListener("click", startMusic, { once: true });
nbtn.addEventListener("click", startMusic, { once: true });


function moveAndGrow() {

    count++;

    if(count === 1) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "31.5%";
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
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.3})`;
        nbtn.innerHTML = "Please, babe it will be fun🥹!"
    }
    else if(count === 4) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "2%";
        ybtn.style.transform += `scale(${1.4})`;
        nbtn.innerHTML = "Baby pleeeeaaaaaaaaaase😭!"
    }
    else if(count === 5) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.5})`;
        nbtn.innerHTML = "I promise you will love it🥺."
    }
    else if(count === 6) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.6})`;
        nbtn.innerHTML = "You will not regret, Babe🥺"
    }
    else if(count === 7) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${1.7})`;
        nbtn.innerHTML = "PLEASE, PLEASE, PLEASE🥹!"
    }
    else if(count === 8) {
        //nbtn.style.transform += `translateX(${120}px)`;
        ybtn.style.transform += `scale(${1.25})`;
    }
    
}


page1.style.display = "block";
page2.style.display = "none";


function swap() {
    page2.style.display = "block";
    page1.style.display = "none";
    confetti();
}


