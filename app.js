const openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    target.removeAttribute("aria-hidden")
    target.setAttribute("modal-modal", "true")
}
document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", openModal)
})