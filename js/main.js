// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- MOBILE NAVBAR TOGGLE ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // --- ACTIVE NAVBAR LINK HIGHLIGHTER ---
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // --- PROJECT MODAL LOGIC ---
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-button');
    const modalDemoButton = document.getElementById('modal-demo-link');

    if (modal) {
        // Populate modal when a project card is clicked
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.getAttribute('data-title');
                const img = card.getAttribute('data-img');
                const description = card.getAttribute('data-description');
                const tech = card.getAttribute('data-tech');
                const githubLink = card.getAttribute('data-github-link');
                const demoLink = card.getAttribute('data-demo-link'); // This will be null if the attribute doesn't exist

                // Populate modal with project data
                document.getElementById('modal-title').innerText = title;
                document.getElementById('modal-img').src = img;
                document.getElementById('modal-description').innerText = description;
                document.getElementById('modal-github-link').href = githubLink;
                
                const techContainer = document.getElementById('modal-tech');
                techContainer.innerHTML = '';
                tech.split(',').forEach(techName => {
                    const techBadge = document.createElement('span');
                    techBadge.className = 'tech-badge';
                    techBadge.innerText = techName.trim();
                    techContainer.appendChild(techBadge);
                });

                // --- NEW LOGIC FOR THE DEMO BUTTON ---
                if (demoLink) {
                    // If a demo link exists, set the href and remove the alert flag
                    modalDemoButton.setAttribute('href', demoLink);
                    modalDemoButton.setAttribute('target', '_blank'); // Open in new tab
                    modalDemoButton.removeAttribute('data-alert');
                } else {
                    // If no demo link, set href to '#' and add a data attribute to trigger an alert
                    modalDemoButton.setAttribute('href', '#');
                    modalDemoButton.removeAttribute('target'); // Don't open in new tab
                    modalDemoButton.setAttribute('data-alert', 'true');
                }

                modal.style.display = 'block';
            });
        });

        // Add a single click event listener for the demo button
        modalDemoButton.addEventListener('click', function(event) {
            if (this.getAttribute('data-alert') === 'true') {
                event.preventDefault(); // Prevent the link from navigating
                alert('Live demo will be added soon.');
            }
        });

        // Close modal logic
        const close = () => {
            modal.style.display = 'none';
        };

        closeModal.addEventListener('click', close);
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                close();
            }
        });
    }
});