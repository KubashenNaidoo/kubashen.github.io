    // Your GitHub username
    const username = 'kubashennaidoo'; // Replace this with your GitHub username

    // GitHub API URL to fetch the repositories
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    // Fetch repositories
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById('project-list');
            
            // Loop through each repo and create a list item
            data.forEach(repo => {
                const repoItem = document.createElement('li');
                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;  // Link to the repository
                repoLink.textContent = repo.name;  // Repo name
                repoItem.appendChild(repoLink);
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));