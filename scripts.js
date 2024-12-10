    // Your GitHub username
    const username = 'kubashennaidoo'; // Replace this with your GitHub username

    // GitHub API URL to fetch the repositories
    const apiUrl = `https://api.github.com/users/${username}/repos`;


    const excludedRepos = [
    'kubashennaidoo.github.io',  // Example repo to exclude
    'DS_1'                       // Another repo to exclude
];


// Mapping of GitHub repo names to custom display names
const repoNameMapping = {
    'Ansible-Starter': 'Ansible Basics',
    'Data-Processing-with-Spark': 'Data Processing with Apache Spark',
    'Data-Visualisation-Time-Series': 'Time Series Data Visualisation',
    'DS_1': 'Data Science Project 1',
    'kubashennaidoo.github.io': 'Personal Portfolio Website',
    'Starter-HTML-CSS-JS': 'HTML, CSS, and JavaScript Starter',
    'Terraform-Starter': 'Terraform Basics'
};



// Your GitHub username
const username = 'kubashen'; // Replace with your GitHub username

// GitHub API URL to fetch the repositories
const apiUrl = `https://api.github.com/users/${username}/repos`;

// List of repository names to exclude
const excludedRepos = [
    'kubashennaidoo.github.io',  // Example repo to exclude
    'DS_1'                       // Another repo to exclude
];

// Mapping of GitHub repo names to custom display names
const repoNameMapping = {
    'Ansible-Starter': 'Ansible Basics',
    'Data-Processing-with-Spark': 'Data Processing with Apache Spark',
    'Data-Visualisation-Time-Series': 'Time Series Data Visualisation',
    'DS_1': 'Data Science Project 1',
    'kubashennaidoo.github.io': 'Personal Portfolio Website',
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
            
            // Get the custom name from the mapping, or fallback to the original repo name
            const displayName = repoNameMapping[repo.name] || repo.name;  
            
            repoLink.href = repo.html_url;  // Link to the repository
            repoLink.textContent = displayName;  // Custom or default repo name
            repoItem.appendChild(repoLink);
            
            // Add description as a paragraph under each repo link
            const repoDescription = document.createElement('p');
            repoDescription.textContent = repo.description || 'No description available';
            repoItem.appendChild(repoDescription);

            repoList.appendChild(repoItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
