const form = document.querySelector('#formSearch');

form.addEventListener('submit',  (e) => {
e.preventDefault()
console.log("s");
})


const dadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    console.log(res.data)
}

dadJoke()