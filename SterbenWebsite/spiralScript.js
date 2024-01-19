//  ---- SPIRAL ---- 
const words = "STERBEN            STERBEN            STERBEN"; //Add more words as needed

const ANIMATION_DURATION = 4000; //Duration in ms

//Seperate chars from word into own div
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;
        return div;
    }
    document.getElementById("spiral").append(createElement(0));

    document.getElementById("spiral2").append(createElement(-1 * (ANIMATION_DURATION / 2)));
});