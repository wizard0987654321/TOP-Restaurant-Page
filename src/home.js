export default function loadHome() {
    const div = document.getElementById("content");
    const homediv = document.createElement("div");
    homediv.classList.add("homepage");

    homediv.innerHTML = `
                        <h1>Welcome to Los Pollos Hermanos</h1>
                        <h3>Best Fast Food Restaurant Chain specializing in Chicken</h3>`

    div.appendChild(homediv);
};

