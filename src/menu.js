export default function loadMenu() {
    const div = document.getElementById("content");
    const menudiv = document.createElement("div");
    menudiv.classList.add("menupage");

    menudiv.innerHTML = `
    <div class="meal">
        <h4>Pollos Breakfast</h4>
        <img src="pollosbreakfast.jpg" class="mealpic">
    </div>
    <div class="meal">
        <h4>Chicken Burrito</h4>
        <img src="chickenburrito.jpg" class="mealpic">
    </div>
    <div class="meal">
        <h4>Taco Salad (chicken)</h4>
        <img src="tacosalad.jpg" class="mealpic">
    </div>
    <div class="meal">
        <h4>Chicken Wrap</h4>
        <img src="chickenwrap.jpg" class="mealpic">
    </div>`

    div.appendChild(menudiv);
};

