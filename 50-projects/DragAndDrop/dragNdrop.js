const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for(const empty of empties) {
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("dragdrop", dragDrop)
    empty.addEventListener("dragEnter", dragEnter)

}

function dragStart () {
    this.className += " hold"
}

function dragEnd () {
    console.log("end")
}

function dragOver () {
    console.log("over")
}

function dragEnter () {
    console.log("enter")
}

function dragDrop () {
    console.log("drop")
}

function dragLeave () {
    console.log("leave")
}