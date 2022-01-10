const menuIcon = document.getElementById("menu-icon")
const modalMenu = document.getElementById("modal-menu")
const closeMenu = document.getElementById("close-modal-menu")

menuIcon.addEventListener("click",() => {
    modalMenu.classList.add('active')
})

closeMenu.addEventListener("click",() => {
    modalMenu.classList.remove('active')
})

const btnModal2 = document.getElementById("btnModal2")
const modal2 = document.getElementById("modal2")
const btnCloseModal2 = document.getElementById("btnCloseModal2")

btnModal2.addEventListener("click",() => {
    modal2.classList.add('active')
})

btnCloseModal2.addEventListener("click",() => {
    modal2.classList.remove('active')
})