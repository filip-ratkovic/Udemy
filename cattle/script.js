let klasa = document.querySelectorAll(".klass")


klasa.forEach((el) => {
   
    el.addEventListener("click", () => {
        removeActive()
el.classList.add("active")
    })
})


////////////
function removeActive(el) {
    klasa.forEach((el) => {
        el.classList.remove("active")
    })
    }



    let link = document.querySelectorAll(".link")


link.forEach((el) => {
   
    el.addEventListener("click", () => {
        removeNavActive()
el.classList.add("nav-active")
    })
})



function removeNavActive(el) {
    link.forEach((el) => {
        el.classList.remove("nav-active")
    })
    }

   ////////////////


   let text = document.querySelectorAll(".text")
   let bovine = document.getElementById("bovine");
   let sheeps = document.getElementById("sheeps");
   let goats= document.getElementById("goats");


   bovine.addEventListener("click", () => {
    text.forEach((el) => {
        el.innerHTML = ""
    el.innerHTML = "bovine"
    })
   })

   sheeps.addEventListener("click", () => {
    text.forEach((el) => {
        el.innerHTML = ""
    el.innerHTML = "sheeps"
    })
   })

   goats.addEventListener("click", () => {
    text.forEach((el) => {
        el.innerHTML = ""
    el.innerHTML = "goats"
    })
   })