


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

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const category = document.createElement("p");

        const categoryLabel = document.createElement("strong");
        categoryLabel.textContent = "Category: ";

        category.appendChild(categoryLabel);
        category.appendChild(document.createTextNode(project.category));

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);

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


/* SECTION D: DARK MODE */

// Find the Dark Mode button
const themeToggle = document.querySelector("#themeToggle");

// Get the saved theme
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme when the page loads
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Update the button text
function updateThemeButton() {

    if (themeToggle) {

        const isDarkMode = document.body.classList.contains("dark-mode");

        if (isDarkMode) {
            themeToggle.textContent = "Switch to Light Mode";
            themeToggle.setAttribute("aria-pressed", "true");
        } else {
            themeToggle.textContent = "Switch to Dark Mode";
            themeToggle.setAttribute("aria-pressed", "false");
        }
    }
}

// Display the correct button text
updateThemeButton();

// Switch between light mode and dark mode
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDarkMode = document.body.classList.contains("dark-mode");

        // Save the visitor's choice
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        // Update the button text
        updateThemeButton();
    });
}
