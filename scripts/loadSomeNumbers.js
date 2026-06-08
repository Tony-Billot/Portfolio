const startYear = 2019;
const currentYear = new Date().getFullYear();
const yearSinceStart = currentYear - startYear;

async function getGithubProjects() {
    const res = await fetch("https://api.github.com/users/Tony-Billot");
    const data = await res.json();
    return data.public_repos;
}

async function getTotalCommitCount() {
    const reposRes = await fetch(
        "https://api.github.com/users/Tony-Billot/repos"
    );
    const repos = await reposRes.json();
    let totalCommits = 0;
    for (const repo of repos) {
        const commitsRes = await fetch(
            `https://api.github.com/repos/Tony-Billot/${repo.name}/commits`
        );
        const commits = await commitsRes.json();
        if (Array.isArray(commits)) {
            totalCommits += commits.length;
        }
    }
    return totalCommits;
}


let numberOfGithubProjects = await getGithubProjects();
let numberOfGithubCommits = await getTotalCommitCount();

document.getElementById("some_numbers").innerHTML = (`
                <h2>Quelques chiffres</h2>
                    <ul>
                        <li><i class="material-icons yellow">developer_mode</i> Développeur depuis ${yearSinceStart} ans</li>
                        <li><i class="material-icons green">terminal</i>${numberOfGithubProjects} projets GitHub</li>
                        <li><i class="material-icons blue">commit</i> ${numberOfGithubCommits} commits sur GitHub</li>
                    </ul>
`);
