const splittedCurrentFileName = window.location.pathname.split("/");
const currentFileName = splittedCurrentFileName[splittedCurrentFileName.length - 1];

if (currentFileName == "index.html") {

    document.write(`

        <nav>
            <button id="nav_toogle" onClick="onClickNavToggle()">≡</button>
            <ul>
                <li id="topleft_button">
                    <a href="index.html">
                        &lt;/&gt; <!-- Symboles </>, car sinon cela est prit pour une balise -->
                    </a>
                </li>

                <li id="nav_home"><a href="index.html">Accueil</a></li>
                <li id="nav_projects"><a href="pages/presentation.html">Pr&eacute;sentation</a></li> <!-- &eacute; pour é -->
                <li id="nav_career"><a href="pages/career.html">Parcours</a></li>
                <li id="nav_skills-projects"><a href="pages/skills-projects.html">Comp&eacute;tences et Projets</a></li> <!-- &eacute; pour é -->
                <li id="nav_contact"><a href="pages/contact.html">Me contacter</a></li>
            </ul>
        </nav>
        `);
        const homeLink = document.querySelector('nav ul li#nav_home a').classList.add("active");
}

else {
    document.write(`

        <nav>
            <button id="nav_toogle" onClick="onClickNavToggle()">≡</button>
            <ul>
                <li id="topleft_button">
                    <a href="../index.html">
                        &lt;/&gt; <!-- Symboles </>, car sinon cela est prit pour une balise -->
                    </a>
                </li>

                <li id="nav_home"><a href="../index.html">Accueil</a></li>
                <li id="nav_projects"><a href="presentation.html">Pr&eacute;sentation</a></li> <!-- &eacute; pour é -->
                <li id="nav_contacts"><a href="career.html">Parcours</a></li>
                <li id="nav_skills-projects"><a href="skills-projects.html">Comp&eacute;tences et Projets</a></li> <!-- &eacute; pour é -->
                <li id="nav_contact"><a href="contact.html">Me contacter</a></li>
            </ul>
        </nav>
        `);

    const currentPageLink = document.querySelector(`nav ul li a[href="${currentFileName}"]`);

    if (currentPageLink) {
        currentPageLink.classList.add("active");
    }
}

function onClickNavToggle() {
    const navUl = document.querySelector("nav ul");
    navUl.classList.toggle("active");
}