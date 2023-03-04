const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);
checkBox()




function checkBox() {
    const trigger = window.innerHeight -200;

boxes.forEach(box => { 
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop, trigger);
    if(boxTop<trigger) {
        box.classList.add("show")
    }
})
}