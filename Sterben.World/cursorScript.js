const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

const button = document.getElementById("button1");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorDot.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 0, fill: "forwards" });

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 200, fill: "forwards" });
});

button.addEventListener("mouseenter", function (e) {
    cursorDot.style.backgroundColor = "black";
    cursorOutline.style.border = "2px solid hsla(0, 0%, 0%, 0.5)";
});

button.addEventListener("mouseleave", function (e) {
    cursorDot.style.backgroundColor = "white";
    cursorOutline.style.border = "2px solid hsla(0, 0%, 100%, 0.5)";
});