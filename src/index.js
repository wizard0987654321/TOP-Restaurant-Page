import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

document.addEventListener('DOMContentLoaded', function() {
    
    loadHome();

    const div = document.getElementById("content");

    function clearContent () {
        div.innerHTML = `<nav class="navbar">
        <div class="navdiv">
            <ul>
                <li><a href="#" id="home">Home</a></li>
                <li><a href="#" id="menu">Menu</a></li>
                <li><a href="#" id="about">About</a></li>
            </ul>
        </div>
    </nav>`;
    }

    div.addEventListener("click", function(e) {
        if (e.target.id === "home") {
            clearContent();
            loadHome();
        } else if (e.target.id === "menu") {
            clearContent();
            loadMenu();
        } else if (e.target.id === "about") {
            clearContent();
            loadAbout();
        }
    });
    });

console.log('traki');
