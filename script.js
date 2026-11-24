
/* SECTION A: STORE PROJECTS AS DATA */

const projects = [
    {
        title: "Bio Page",
        description: "My first HTML and CSS personal webpage.",
        category: "HTML"
    },
    {
        title: "Responsive Navigation",
        description: "A navigation bar that adjusts to different screen sizes.",
        category: "CSS"
    },
    {
        title: "Project Gallery",
        description: "A collection of project cards using CSS Grid.",
        category: "CSS"
    },
    {
        title: "Contact Form",
        description: "A contact form with HTML validation.",
        category: "JavaScript"
    }
];


/* SECTION B: DISPLAY PROJECT CARDS */

const projectsGrid = document.querySelector("#projectsGrid");

if (projectsGrid) {
    projects.forEach(function (project) {
        const card = document.createElement("article");

        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Category:</strong> ${project.category}</p>
        `;

        projectsGrid.appendChild(card);
    });
}


/* SECTION C: HANDLE CONTACT FORM */

const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();

        alert("Thank you, " + name + "! Your message has been received.");

        form.reset();
    });
}
