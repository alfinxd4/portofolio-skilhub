 const btn = document.querySelector(".navbar-toogler");
const menu = document.querySelectorAll(".nav-item");

menu.forEach(item => {

    btn.addEventListener('click', () => {
        if (item.style.display == 'none') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

});

// reveal animation
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    const revealstop = document.querySelectorAll(".reveal-top");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 85;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }

    for (let i = 0; i < revealstop.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealstop[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            revealstop[i].classList.add("active");
        } else {
            revealstop[i].classList.remove("active");
        }
    }
};
window.addEventListener("scroll", reveal);
