const stars = document.querySelectorAll(".star");
console.log(stars);
let curentActive= 1;



stars.forEach((star,index) => {



    star.addEventListener("click", () => {
        for (let i = 0; i <= index;i ++) {
             stars[i].classList.add("active");
             if(index<stars.length) {
                 for (let j = index+1; j < stars.length; j++) {
                    stars[j].classList.remove("active"); 
                 }
             }
        }
    })
})
