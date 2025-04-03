document.addEventListener("DOMContentLoaded", function () {
    loadComponent("../components/sidebar.html", "sidebar-container", highlightActiveNav);
    loadComponent("../components/navbar.html", "navbar-container", loadNavbarScript);
    loadComponent("../components/foods-card.html", "foods-card");
    loadComponent("../components/recipe-dashboard.html", "recipe-dashboard");
    loadComponent("../components/recipe-card.html", "recipe-card");
});

function loadComponent(url, containerId, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

function highlightActiveNav() {
    let currentPath = window.location.pathname.split("/").pop();
    let links = document.querySelectorAll(".container-list a");
    links.forEach(link => {
        let linkPath = link.getAttribute("href").split("/").pop();
        link.classList.toggle("active", currentPath === linkPath);
    });
}
function loadNavbarScript() {
    let currentPath = window.location.pathname.split("/").pop();
    let titleElement = document.querySelector(".content-typeOfPage .title");
    let contentElement = document.querySelector(".content-typeOfPage .content");

    if (titleElement && contentElement) {
        if (currentPath === "dashboard.html") {
            titleElement.textContent = "Dashboard";
            contentElement.textContent = "Overview and analytics of your system";
        } else if (currentPath === "food-list.html") {
            titleElement.textContent = "Food databases";
            contentElement.textContent = "Create, check and update foods that you can use on meal plans";
        }
    }

    let menuToggle = document.getElementById("menu-toggle");
    let sidebar = document.getElementById("sidebar-container");
    let navbar = document.querySelector(".navbar");
    let mainContent = document.querySelector(".main-content");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            navbar.classList.toggle("full-width");
            mainContent.classList.toggle("full-width");
        });
    } else {
        console.error("Menu toggle button not found!");
    }
}
