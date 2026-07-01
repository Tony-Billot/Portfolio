const startYear = 2019;
const currentYear = new Date().getFullYear();
const yearSinceStart = currentYear - startYear;

async function getGithubProjects() {
    const res = await fetch("https://api.github.com/users/Tony-Billot");
    const data = await res.json();
    return data.public_repos;
}

async function getTotalCommitCount() {
    const reposRes = await fetch("https://api.github.com/users/Tony-Billot/repos");
    const repos = await reposRes.json();

    const commitCounts = await Promise.all(
        repos.map(async (repo) => {
            const commitsRes = await fetch(
                `https://api.github.com/repos/Tony-Billot/${repo.name}/commits`
            );
            const commits = await commitsRes.json();
            const count = Array.isArray(commits) ? commits.length : 0;
            return count;
        })
    );
    const totalCommits = commitCounts.reduce((a, b) => a + b, 0);
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
