const menu = document.querySelector(".menu")
const header = document.querySelector(".header")
const closeMenu = document.querySelector(".close")

menu.addEventListener('click', ()=> {
    header.classList.toggle("mobile-active")
})

closeMenu.addEventListener('click', ()=> {
    header.classList.toggle("mobile-active")
})