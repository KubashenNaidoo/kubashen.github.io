// Your GitHub username
const username = 'kubashennaidoo'; // Replace with your GitHub username

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

// Fetch repositories from GitHub API
fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('project-list');

        // Filter out the repositories that are in the excludedRepos list
        const filteredRepos = data.filter(repo => !excludedRepos.includes(repo.name));

        // Loop through each remaining repo and create a card item
        filteredRepos.forEach(repo => {
            const repoItem = document.createElement('li');
            repoItem.classList.add('repo-card');  // Add class for styling

            // Create the link to the project page
            const repoLink = document.createElement('a');
            const displayName = repoNameMapping[repo.name] || repo.name;

            // Assuming the project pages are named based on the repo names (lowercased and hyphenated)
            const projectPageUrl = `/projects/${repo.name.toLowerCase().replace(/_/g, '-').replace(/ /g, '-')}.html`; 

            repoLink.href = projectPageUrl;  // Link to the project page
            repoLink.textContent = displayName;
            repoLink.classList.add('project-link');  // Class for styling

            // Create a description for the repo (if available)
            const repoDescription = document.createElement('p');
            repoDescription.textContent = repo.description || 'No description available';
            repoDescription.classList.add('repo-description');  // Class for styling

            // Create a section for tech used (e.g., language)
            const techUsed = document.createElement('p');
            techUsed.textContent = `Tech used: ${repo.language || 'Not specified'}`;
            techUsed.classList.add('tech-used');  // Class for styling

            // Append elements to the card
            repoItem.appendChild(repoLink);
            repoItem.appendChild(repoDescription);
            repoItem.appendChild(techUsed);

            // Append the card to the project list
            repoList.appendChild(repoItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
