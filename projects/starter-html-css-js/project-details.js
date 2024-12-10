// Get the project name dynamically (this could be passed in the URL or from a data attribute)
const projectName = 'starter-html-css-js'; // This could be dynamic based on URL or page structure

// Construct the path to the project-info.json file
const projectInfoPath = `../projects/${projectName}/project-info.json`;

// Fetch the project info JSON file
fetch(projectInfoPath)
    .then(response => response.json())
    .then(data => {
        const projectDetailsSection = document.getElementById('project-details');

        // Display project name and description
        const projectTitle = document.createElement('h2');
        projectTitle.textContent = data.name;
        projectDetailsSection.appendChild(projectTitle);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = data.description;
        projectDetailsSection.appendChild(projectDescription);

        // Display features
        const featuresTitle = document.createElement('h3');
        featuresTitle.textContent = 'Features';
        projectDetailsSection.appendChild(featuresTitle);

        const featuresList = document.createElement('ul');
        data.features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            featuresList.appendChild(listItem);
        });
        projectDetailsSection.appendChild(featuresList);

        // Display challenges
        const challengesTitle = document.createElement('h3');
        challengesTitle.textContent = 'Challenges Faced';
        projectDetailsSection.appendChild(challengesTitle);

        const challengesList = document.createElement('ul');
        data.challenges.forEach(challenge => {
            const listItem = document.createElement('li');
            listItem.textContent = challenge;
            challengesList.appendChild(listItem);
        });
        projectDetailsSection.appendChild(challengesList);

        // Display enhancements
        const enhancementsTitle = document.createElement('h3');
        enhancementsTitle.textContent = 'Further Enhancements';
        projectDetailsSection.appendChild(enhancementsTitle);

        const enhancementsList = document.createElement('ul');
        data.enhancements.forEach(enhancement => {
            const listItem = document.createElement('li');
            listItem.textContent = enhancement;
            enhancementsList.appendChild(listItem);
        });
        projectDetailsSection.appendChild(enhancementsList);
    })
    .catch(error => {
        console.error('Error fetching project info:', error);
    });
