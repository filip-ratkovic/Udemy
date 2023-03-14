const textEl = document.getElementById('text');
const text = ["Filip Ratkovic ", "Web Developer ", "Frontend Developer "]
let idx = 1;
let LengthIdx = 0;


writeText();

function writeText() {
 
    textEl.innerText = text[LengthIdx].slice(0,idx);
    idx ++;

    if(idx > text[LengthIdx].length) {
        idx = 1
        LengthIdx ++
    }
    
    if(LengthIdx>text.length-1) {
        LengthIdx = 0
    }

    setTimeout(writeText, 200);
   
}





// const textEl = document.getElementById('text');
// // const text = 'I am Filip Ratkovic';
// const tex
// let index = 1;

// writeText();

// function writeText() {
//     textEl.innerText = text.slice(0,index);
//     index ++;

//     if(index > text.length) {
//         index = 1
//     }

//     setTimeout(writeText, 300);
// }