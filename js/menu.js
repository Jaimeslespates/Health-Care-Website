const menu = document.querySelector(".header-menu")
const header = document.querySelector("header")
const closeMenu = document.querySelector(".header-menu-close")

menu.addEventListener('click', ()=> {
    header.classList.toggle("mobile-active")
});

closeMenu.addEventListener('click', ()=> {
    header.classList.toggle("mobile-active")
})