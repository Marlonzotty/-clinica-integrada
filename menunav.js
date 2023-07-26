var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function () {

    if (iconMenu.getAttribute("src") == '/img/listras.png') {
        iconMenu.setAttribute("src", "/img/listras.png");
    } else {
        iconMenu.setAttribute("src", "/img/listras.png");
    }

    menu.classList.toggle('active');
});
let count = 1;
document.getElementById("radio1").ariaChecked = true;

setInterval(function () {
    nextImage();
}, 6000)
function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
