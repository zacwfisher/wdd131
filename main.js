document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const skillBarsContainer = document.querySelector('.skill-bars');
    const projectGrid = document.querySelector('.project-grid');
    const projectFilter = document.querySelector('.project-filter');
    const contactForm = document.getElementById('contact-form');
    const formSubmissionMessage = document.getElementById('form-submission-message');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    let projectsData = [];

    // function to toggle light and dark theme
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // event listener for theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // skill data
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 15 }
    ];

    // function to render skill bars
    function renderSkills() {
        if (skillBarsContainer) {
            skills.forEach(skill => {
                const skillBar = document.createElement('div');
                skillBar.classList.add('skill-bar');
                const skillLevel = document.createElement('div');
                skillLevel.classList.add('skill-level');
                skillLevel.textContent = skill.name;
                skillLevel.style.width = `${skill.level}%`;
                skillBar.appendChild(skillLevel);
                skillBarsContainer.appendChild(skillBar);
            });
        }
    }

    // project info
    const initialProjects = [
        {
            id: 1,
            name: 'Project D&D',
            description: 'A choose-your-adventure game within a command line!',
            image: 'placeholder-project1.jpg',
            technologies: ['Python'],
            category: 'web'
        },
        {
            id: 2,
            name: 'SQL Forward Engineering',
            description: 'Created databases via forward engineering in MySQL.',
            image: 'placeholder-project2.jpg',
            technologies: ['SQL'],
            category: 'databases'
        },
    ];

    // function to render project cards
    function renderProjects(projects) {
        if (projectGrid) {
            projectGrid.innerHTML = '';
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.name}">
                    <div class="project-info">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <p class="technologies">Technologies: ${project.technologies.join(', ')}</p>
                    </div>
                `;
                projectGrid.appendChild(projectCard);
            });
        }
    }

    // function to render project filter buttons
    function renderFilterButtons(projects) {
        if (projectFilter) {
            // create a Set to store unique categories
            const uniqueCategories = new Set(['all']); // start with 'all'

            // add categories from projects to the Set
            projects.forEach(project => {
                uniqueCategories.add(project.category);
            });
            const categoriesToRender = Array.from(uniqueCategories);
            categoriesToRender.forEach(category => {
                const button = document.createElement('button');
                const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
                button.textContent = formattedCategory;
                button.dataset.filter = category;
                button.addEventListener('click', filterProjects);
                projectFilter.appendChild(button);
            });
        }
    }

    // function to filter projects
    function filterProjects(event) {
        const filterValue = event.target.dataset.filter;
        const filteredProjects = filterValue === 'all' ? projectsData : projectsData.filter(project => project.category === filterValue);
        renderProjects(filteredProjects);
        // update active filter button
        projectFilter.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    // function to fetch project data from JSON (replace with your actual path)
    function fetchProjects() {
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                projectsData = data;
                renderProjects(projectsData);
                renderFilterButtons(projectsData);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                // fallback to initial projects if fetching fails
                projectsData = initialProjects;
                renderProjects(projectsData);
                renderFilterButtons(projectsData);
            });
    }

    // basic contact form validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            // validate name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Invalid email format.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // validate message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (isValid) {
                // simulate form submission
                console.log('Form submitted:', {
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                });
                formSubmissionMessage.classList.remove('hidden');
                contactForm.reset();
                setTimeout(() => {
                    formSubmissionMessage.classList.add('hidden');
                }, 3000);
            }
        });
    }

    renderSkills();
    fetchProjects();
});