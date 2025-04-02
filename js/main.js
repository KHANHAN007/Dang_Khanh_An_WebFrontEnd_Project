document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            highlightActiveNav();
        })
        .catch(error => console.error("Error loading sidebar:", error));

    fetch("../components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            loadNavbarScript();
        })
        .catch(error => console.error("Error loading navbar:", error))
    fetch("../components/foods-card.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("foods-card").innerHTML = data;
        })
        .catch(error => console.error("Error loading foodcard:", error));

});

function highlightActiveNav() {
    let currentPath = window.location.pathname.split("/").pop();
    let links = document.querySelectorAll(".container-list a");
    links.forEach(link => {
        let linkPath = link.getAttribute("href").split("/").pop();
        if (currentPath === linkPath) {
            link.classList.add("active");
        }
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
            navbar.classList.toggle("full-width"); mainContent.classList.toggle("full-width");
        });
    } else {
        console.error("Menu toggle button not found!");
    }

}