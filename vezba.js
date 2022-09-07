const btn = document.querySelectorAll("button")


for(let button of btn) {
    button.addEventListener("click", colorised)
}


function randomColor () {
    r=Math.floor(Math.random()*256)
    g=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`;
}

function colorised() {
    this.style.backgroundColor=randomColor();
    this.style.fontSize="14px"
}