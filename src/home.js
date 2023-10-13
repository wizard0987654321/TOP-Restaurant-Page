export default function loadHome() {
    document.addEventListener('DOMContentLoaded', function() {
    const div = document.getElementById("content");

    div.innerHTML = `<nav class="navbar">
    <div class="navdiv">
        <ul>
            <li><a href="#" id="home">Home</a></li>
            <li><a href="#" id="menu">Menu</a></li>
            <li><a href="#" id="about">About</a></li>
        </ul>
    </div>
</nav>
<h1>Welcome to Los Pollos Hermanos</h1>
<h3>Best Fast Food Restaurant Chain specializing in Chicken</h3>`
    });
};

