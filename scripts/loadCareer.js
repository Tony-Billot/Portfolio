careerData = {
    "career": [
        {
            "place": "Geovelo",
            "role": "Stagiaire",
            "startDate": "2026-06-01",
            "endDate": null,
            "responsibilities": [
                "Programmation d'un Portfolio complet, consultable juste ici !"
            ]
        },
        {
            "place": "Geovelo",
            "role": "Stagiaire",
            "startDate": "2026-06-04",
            "endDate": null,
            "responsibilities": [
                "Programmation d'un Portfolio complet, consultable juste ici !"
            ]
        },        
        {
            "place": "Geovelo",
            "role": "Stagiaire",
            "startDate": "2026-06-05",
            "endDate": null,
            "responsibilities": [
                "Programmation d'un Portfolio complet, consultable juste ici !"
            ]
        },
        {
            "place": "Geovelo",
            "role": "Stagiaire",
            "startDate": "2026-06-02",
            "endDate": null,
            "responsibilities": [
                "Programmation d'un Portfolio complet, consultable juste ici !"
            ]
        },
                
    {
            "place": "Geovelo",
            "role": "Stagiaire",
            "startDate": "2026-06-03",
            "endDate": null,
            "responsibilities": [
                "Programmation d'un Portfolio complet, consultable juste ici !"
            ]
        },        

    ]
};


// Faire marcher _ça
function sortCareerByDate(career) {
    // Create items array
    var items = Object.keys(career).map(function(key) {
    return [key, career[key]];
    });

    items.sort(function(first, second) {
    console.log(first[4])
    return new Date(second[4]).getTime() - new Date(first[4]).getTime();
    });

    console.log(items.slice(0, 5));
}




function formatDate(dateStr) { // Convertisseur format date français (mois en français / année)
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}

function formatPeriod(startDate, endDate) { // Ecrit la date en haut de la carte
    const start = formatDate(startDate);
    if (endDate == null) {
        var end = "Aujourd'hui"; // &eacute; = é
    } else {
        var end = formatDate(endDate);
    }
    return `De ${start} &agrave; ${end}`;
}


// Fonction faite pour afficher la carte sous forme d'une pseudo-clase java
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



var directionOfCard = "left"; // 0: gauche, 1: droite -> pour faire alterner les cartes entre gauche et droite (effet de style)
const middle = document.getElementById("middle"); // ligne de séparation

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

    // Switch entre les deux sens
    if(directionOfCard === "left") {
        directionOfCard = "right";
    } else {
        directionOfCard = "left";
    }
}



sortCareerByDate(careerData.career);