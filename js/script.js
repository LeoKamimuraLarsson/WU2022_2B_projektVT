const burger = document.querySelector("#hamburger_menu")
const nav = document.querySelector("#nav_links")

function toggleMenu(){
    nav.classList.toggle("nav-active")
    burger.classList.toggle("burger-toggle")
}

burger.addEventListener("click", toggleMenu)