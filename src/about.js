export default function loadAbout() {
    const div = document.getElementById("content");
    const aboutdiv = document.createElement("div");
    aboutdiv.classList.add("aboutpage");

    aboutdiv.innerHTML = `
        <div class="aboutdiv">
            <div class="infodiv">
                <h5>Los Pollos Hermanos (Spanish pronunciation: [los po.ʝos eɾ.ma.nos]; broken Spanish for The Chicken Brothers) is a fast food restaurant chain specializing in chicken</h5>
                <a href="https://breakingbad.fandom.com/wiki/Los_Pollos_Hermanos"><p>Read More</p></a>
            </div>
            <img src="gustavo.png" alt="founderpic" class="aboutpic">
        </div>`

    div.appendChild(aboutdiv);
};