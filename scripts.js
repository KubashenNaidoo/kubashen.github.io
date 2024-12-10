    // Your GitHub username
    const username = 'kubashennaidoo'; // Replace this with your GitHub username

    // GitHub API URL to fetch the repositories
    const apiUrl = `https://api.github.com/users/${username}/repos`;


    const excludedRepos = [
    'kubashennaidoo.github.io',  // Example repo to exclude
    'DS_1'                       // Another repo to exclude
];


const repoNameMapping = {
    'Ansible-Starter': 'Ansible Basics',
    'Data-Processing-with-Spark': 'Data Processing with Apache Spark',
    'Data-Visualisation-Time-Series': 'Time Series Data Visualisation',
    'Starter-HTML-CSS-JS': 'HTML, CSS, and JavaScript Starter',
    'Terraform-Starter': 'Terraform Basics'
};


// Fetch repositories
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
            const displayName = repoNameMapping[repo.name] || repo.name;  // Use custom name or default to repo name
            
            repoLink.href = repo.html_url;  // Link to the repository
            repoLink.textContent = displayName;  // Custom or default repo name
            repoItem.appendChild(repoLink);
            repoList.appendChild(repoItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));