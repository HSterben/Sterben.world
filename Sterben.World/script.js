// Scroll animation

const observer = new IntersectionObserver((entries) => {
    let allOutOfView = true;

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            allOutOfView = false;
        } else {
            entry.target.classList.remove('show');
        }
    });
    if (allOutOfView) {
        hiddenElements.forEach((el) => el.classList.remove('show'));
    }
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Button functionality
function redirectToWebsite() {
    window.location.href = 'https://dreamcore.world';
}

// Dark BG on Nav (Scroll)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    navbar.style.backdropFilter = "blur(" + (scrollTop / 60) + "px)";
}