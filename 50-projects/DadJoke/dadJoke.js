const joke = document.getElementById("joke");
const btn = document.getElementById("btn")
async function generateJoke() {
    const config = {
        headers:{
        Accept:"application/json",}
}

const res = await fetch("https://icanhazdadjoke.com", config);
data = await res.json();
joke.innerHTML = data.joke;
}

generateJoke()

btn.addEventListener("click", (generateJoke))
