const btn_menu = document.getElementById('menu-icon');
const menu=document.getElementById('navbar');

function active() {
    menu.classList.toggle('active');
    btn_menu.classList.toggle('active');
}