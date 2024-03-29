const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const profileName = document.getElementById("name");
const date = document.getElementById("date");

const animatedBg = document.querySelectorAll(".animated-bg");
const animatedBgText = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="laptop" />'
    title.innerHTML = ' Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, voluptate.';
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="portrait">'
    profileName.innerHTML = "John Doe";
    date.innerHTML = "Oct 08, 2022";

    animatedBg.forEach(bg => bg.classList.remove("animated-bg"));
    animatedBgText.forEach(bg => bg.classList.remove("animated-bg-text"));

}