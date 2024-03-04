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