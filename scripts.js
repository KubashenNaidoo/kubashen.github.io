    // Your GitHub username
    const username = 'kubashennaidoo'; // Replace this with your GitHub username

    // GitHub API URL to fetch the repositories
    const apiUrl = `https://api.github.com/users/${username}/repos`;


    const excludedRepos = [
    'kubashennaidoo.github.io',  // Example repo to exclude
    'DS_1'                       // Another repo to exclude
];

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('project-list');
        
        // Filter out the repositories that are in the excludedRepos list
        const filteredRepos = data.filter(repo => !excludedRepos.includes(repo.name));
        
        // Loop through each remaining repo and create a list item
        filteredRepos.forEach(repo => {
            const repoItem = document.createElement('li');
            const repoLink = document.createElement('a');
            repoLink.href = repo.html_url;  // Link to the repository
            repoLink.textContent = repo.name;  // Repo name
            repoItem.appendChild(repoLink);
            repoList.appendChild(repoItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));