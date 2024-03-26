// Scroll animation

const observer = new IntersectionObserver((entries) => {
    let allOutOfView = true;

    entries.forEach((entry) => {
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

// Scroll animation 2

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.scrollAnimate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                entry.target.classList.remove('slide-out');
                entry.target.classList.remove('slide-back');
            } else {
                if (entry.boundingClientRect.top < 0) {
                    entry.target.classList.add('slide-out');
                    entry.target.classList.remove('slide-in');
                    entry.target.classList.remove('slide-back');
                }
                else {
                    entry.target.classList.add('slide-back');
                    entry.target.classList.remove('slide-in');
                    entry.target.classList.remove('slide-out');
                }
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});

// Button functionality
function redirectToWebsite() {
    window.location.href = 'https://dreamcore.world';
}

// Blur BG on Nav (Scroll)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    navbar.style.backdropFilter = "blur(" + (scrollTop / 60) + "px)";
}