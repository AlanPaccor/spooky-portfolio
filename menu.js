document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const menuDropdown = document.querySelector(".menuDropdown");
    const closeButton = document.querySelector(".close");

    menuButton.addEventListener("click", function () {
        menuDropdown.classList.toggle("active");
    });

    closeButton.addEventListener("click", function () {
        menuDropdown.classList.remove("active");
    });
});
