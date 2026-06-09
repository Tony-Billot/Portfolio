careerData = {
    "career": [
        {
            title: "Stage à Geovelo",
            place: "Geovelo",
            role: "Stagiaire",
            startDate: "2026-06-01",
            endDate: "2026-07-05",
            responsibilities: [
                "Développement de ce portfolio en HTML, CSS, JavaScript, sans intervention d'IA. Renforcement de mes compétences en web. Apprentissage de l'utilisation de l'IA dans un cas pratique en entreprise.",
            ]
        },
        {
            title: "Etudiant à Polytech Tours",
            place: "Polytech_Tours",
            role: "Etudiant",
            startDate: "2025-09-01",
            endDate: null,
            responsibilities: [
                "Etudiant en cycle ingénieur à Polytech Tours",
            ] 
        },
        {
            title: "CTF: Passe Ton Hack D'Abord",
            place: "Lycée_Léonard_de_Vinci-Amboise",
            role: "Participant, équipe Hackers MaxiBG",
            startDate: "2025-01-20",
            endDate: "2025-02-07",
            responsibilities: [
                "Participant à la CTF 'Passe Ton Hack D'Abord' avec l'équipe Hackers MaxiBG. Arrivée à la 39ème place de la France, et 1ère place de la région Centre-Val de Loire.",
            ] 
        },
    ]
};


function sortCareerByDate(career) {
    career.sort(
        function(first, second) {
        return new Date(second.startDate).getTime() - new Date(first.startDate).getTime();
        }
    );

    return career;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}

function formatPeriod(startDate, endDate) { 
    const start = formatDate(startDate);
    if (endDate == null) {
        var end = "Aujourd'hui"; 
    } else {
        var end = formatDate(endDate);
    }
    return `De ${start} &agrave; ${end}`;
}


function buildCareerCode(career) { 
    const className = career.place;
    let comments = "";
    for (const responsibility of career.responsibilities) {
        comments += `<span class="comment">// ${responsibility}</span>\n`;
    }

    return `<span class="kw">public</span> <span class="kw">class</span> <span class="type">${className}</span> <span class="brace-outer">{</span>

    <span class="kw">private</span> <span class="type">String</span> <span class="var">role</span>;

    <span class="kw">public</span> <span class="type">${className}</span><span class="brace-inner">(</span><span class="type">String</span> <span class="param">role</span><span class="brace-inner">)</span> <span class="brace-inner">{</span>
        <span class="kw">this</span>.<span class="var">role</span> = <span class="var">role</span>;
    <span class="brace-inner">}</span>

${comments}
    <span class="kw">public</span> <span class="kw">void</span> <span class="method">experience</span><span class="brace-inner">()</span> <span class="brace-inner">{</span>
        <span class="kw">return</span> <span class="kw">this</span>;
    <span class="brace-inner">}</span>
<span class="brace-outer">}</span>
<span class="kw">new</span> <span class="type">${className}</span><span class="brace-inner">(</span><span class="string">"${career.role}"</span><span class="brace-inner">)</span>.<span class="method">experience</span><span class="brace-inner">()</span>;
`;
}


sortCareerByDate(careerData.career);


var directionOfCard = "left";
const middle = document.getElementById("middle");

for (career of careerData.career) {

    middle.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card ${directionOfCard}">
            <p class="card-date">${formatPeriod(career.startDate, career.endDate)}</p>
            <div class="code-window">
                <div class="code-window-bar">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                </div>
                <pre class="code-block"><code>${buildCareerCode(career)}</code></pre>
            </div>
        </div>
        `
    );

    if(directionOfCard === "left") {
        directionOfCard = "right";
    } else {
        directionOfCard = "left";
    }
}