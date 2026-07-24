let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");

let ybtn = document.getElementById("ybtn");
let nbtn = document.getElementById("nbtn");

let text = document.getElementById("text");

const song = document.getElementById("song");

function startMusic() {
    if (!song.paused) return; // Already playing

    song.currentTime = 4;
    song.play().catch(err => console.log(err));
    song.volume = 0.75;
}

ybtn.addEventListener("click", startMusic);
nbtn.addEventListener("click", startMusic);


page1.style.display = "block";
page2.style.display = "none";


let count = 0;
let scale = 1.15;

function moveAndGrow() {

    let messages = [
        "Really?",
        "Say Yes :`)",
        "Are you sure?",
        "Babe, it will be fun🥹!",
        "Baby pleeeeaaaase😭!",
        "I promise you'll love it🥺.",
        "You will not regret, Babe🥺",
        "Please, Please, Please🥹!",
    ]

    let npos = [33.5, 27, 21, 7, 2, 0, 0, 0, 0]

    let ypos = [43, 44, 44, 45, 45, 46, 47, 48]

    for (let i = count; i <= count; i++) {
        nbtn.style.position = "absolute";
        nbtn.style.right = `${npos[i]}%`;
        nbtn.style.top = `${ypos[i] - 14}%`;
        ybtn.style.left = `${ypos[i]}%`;
        ybtn.style.top = `${ypos[i] - 16}%`;
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = messages[i];
    }

    count ++;
    scale += 0.05;

    /*

    if(count === 1) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "33.5%";
        ybtn.style.left = "43%";
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = "Really?"
    }
    else if(count === 2) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "22%";
        ybtn.style.left = "44%";
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = "Are you sure?"
    }
    else if(count === 3) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "8.25%";
        ybtn.style.left = "45%";
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = "Babe, it will be fun🥹!"
    }
    else if(count === 4) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "3%";
        ybtn.style.left = "46%";
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = "Baby pleeeeaaaase😭!"
    }
    else if(count === 5) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.left = "47%";
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = "I promise you'll love it🥺."
    }
    else if(count === 6) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = "You will not regret, Babe🥺"
    }
    else if(count === 7) {
        nbtn.style.position = "absolute";
        nbtn.style.right = "0%";
        ybtn.style.transform += `scale(${scale})`;
        nbtn.innerHTML = "PLEASE, PLEASE, PLEASE🥹!"
    }
    else if(count === 8) {
        //nbtn.style.transform += `translateX(${120}px)`;
        ybtn.style.transform += `scale(${scale})`;
    }

    */
    
}




function swap() {
    page2.style.display = "block";
    page1.style.display = "none";
    confetti();
}


