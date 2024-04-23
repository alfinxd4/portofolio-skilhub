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