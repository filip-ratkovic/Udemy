let klasa = document.querySelectorAll(".klass")


klasa.forEach((el) => {
   
    el.addEventListener("click", () => {
        removeActive()
el.classList.add("active")
    })
})



function removeActive(el) {
    klasa.forEach((el) => {
        el.classList.remove("active")
    })
    }