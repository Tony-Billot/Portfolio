const container = document.getElementById("projects-container");
const skills = document.querySelectorAll(".skill");
let activeSkill = null;

const projectsData = [
    {
        title: "Portfolio 2026",
        description: "Un portfolio créé en 2026, uniquement en HTML, CSS et Javascript.",
        image: "../assets/portfolio2026.png",
        tags: ["html-css", "javascript"],
        link: "https://github.com/Tony-Billot/Portfolio"
    },
    {
        title: "Aster Engine",
        description: "Un moteur de jeu 2D, développé en C. Projet en cours de développement.",
        image: "../assets/asterengine.png",
        tags: ["c", "game-dev"],
        link: "https://github.com/Tony-Billot/AsterEngine"
    },
    {
        title: "MyFirstApp",
        description: "Ma première application mobile, développée en Java en 2022, durant mon stage de 3ème.",
        image: "../assets/myfirstapp.png",
        tags: ["java", "mobile-dev"],
        link: "https://github.com/Tony-Billot/MyFirstApp"
    },
    {
    title: "File Organizer",
    description: "Un organisateur de fichiers développé en python, permettant de trier automatiquement les fichiers dans des dossiers spécifiques.",
    image: "../assets/fileorganizer.png",
    tags: ["python", "automation"],
    link: "https://github.com/Tony-Billot/File-Organizer"
    }
] 

renderProjects(projectsData);

function renderProjects(list) {
    container.innerHTML = "";
    for (const project of list) {
        const tagsHTML = project.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join("");

            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="project-card" data-link="${project.link}">
                    <img class="project-image" src="${project.image}" />

                    <div class="project-content">
                        <div class="project-title">${project.title}</div>
                        <div class="project-description">${project.description}</div>

                        <div class="tags">
                            ${tagsHTML}
                        </div>
                    </div>
                </div>
                `
            );
    }
}

document.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");

    if (!card) return;

    const link = card.dataset.link;

    if (link && link !== "") {
        window.location.href = link;
    }
});

skills.forEach(skill => {
    skill.addEventListener("click", () => {
        const value = skill.dataset.skill;

        if (activeSkill === value) {
            activeSkill = null;
            updateUI();
            renderProjects(projectsData);
            return;
        }

        activeSkill = value;
        updateUI();

        const filtered = projectsData.filter(project =>
            project.tags.includes(value)
        );

        renderProjects(filtered);
    });
});

function updateUI() {
    if(skills.length === 0) 
        document.write("<p>Aucun projet trouvé pour les compétences sélectionnées.</p>");
    skills.forEach(skill => {
        if (skill.dataset.skill === activeSkill) {
            skill.classList.add("active");
        } else {
            skill.classList.remove("active");
        }
    });
}