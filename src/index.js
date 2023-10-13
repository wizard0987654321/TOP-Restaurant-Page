import loadHome from "./home.js"

loadHome();

document.addEventListener('DOMContentLoaded', function() {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const about = document.getElementById("about")

    home.onclick = loadHome();
    menu.onclick = loadMenu();
    });

console.log('traki');