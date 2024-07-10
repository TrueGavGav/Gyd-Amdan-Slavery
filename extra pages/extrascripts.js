document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }

    document.getElementById("darkmode").onclick = function() {
        if (document.body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };

    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        
        let buttons = document.getElementsByClassName("button");
        for (let button of buttons) {
            button.classList.add("dark-mode");
        }

        let icons = document.querySelectorAll("#lang, #darkmode, #github, #googledrive");
        for (let icon of icons) {
            icon.classList.add("dark-mode");
        }

        let iconContainer = document.querySelector(".icon-container");
        if (iconContainer) {
            iconContainer.classList.add("dark-mode");
        }

        localStorage.setItem("darkMode", "enabled");
    }

    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        
        let buttons = document.getElementsByClassName("button");
        for (let button of buttons) {
            button.classList.remove("dark-mode");
        }

        let icons = document.querySelectorAll("#lang, #darkmode, #github, #googledrive");
        for (let icon of icons) {
            icon.classList.remove("dark-mode");
        }

        let iconContainer = document.querySelector(".icon-container");
        if (iconContainer) {
            iconContainer.classList.remove("dark-mode");
        }

        localStorage.setItem("darkMode", "disabled");
    }
});