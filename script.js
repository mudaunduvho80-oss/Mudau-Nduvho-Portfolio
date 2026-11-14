// Mobile navigation menu
const menuButton = document.querySelector(".nav-toggle");
const navigationLinks = document.querySelector(".nav-links");

if (menuButton && navigationLinks) {
    menuButton.addEventListener("click", function () {
        const isOpen = navigationLinks.classList.toggle("is-open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navigationLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigationLinks.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        });
    });
}
