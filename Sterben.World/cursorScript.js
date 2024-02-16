const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

var selectElements = document.getElementsByClassName("select");
var reverseElements = document.getElementsByClassName("reverse");

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

for (var i = 0; i < selectElements.length; i++) {
    var select = selectElements[i];

    select.addEventListener("mouseenter", function (e) {
        cursorDot.animate({
            height: '12px',
            width: '12px',
        }, { duration: 200, fill: "forwards" });
    
        cursorOutline.animate({
            height: '69px',
            width: '69px'
        }, { duration: 400, fill: "forwards" });
    });

    select.addEventListener("mouseleave", function (e) {
        cursorDot.animate({
            height: '7px',
            width: '7px',
        }, { duration: 200, fill: "forwards" });
    
        cursorOutline.animate({
            height: '50px',
            width: '50px'
        }, { duration: 400, fill: "forwards" });
    });
}

for (var i = 0; i < reverseElements.length; i++) {
    var reverse = reverseElements[i];

    reverse.addEventListener("mouseenter", function (e) {
        cursorDot.animate({
            backgroundColor: 'Black'
        }, { duration: 200, fill: "forwards" });
    
        cursorOutline.animate({
            border: '2px solid hsla(0, 0%, 0%, 0.5)'
        }, { duration: 400, fill: "forwards" });
    });

    reverse.addEventListener("mouseleave", function (e) {
        cursorDot.animate({
            backgroundColor: 'hsla(0, 0%, 100%, 1)'
        }, { duration: 200, fill: "forwards" });
    
        cursorOutline.animate({
            border: '2px solid hsla(0, 0%, 100%, 0.5)'
        }, { duration: 400, fill: "forwards" });
    });
}