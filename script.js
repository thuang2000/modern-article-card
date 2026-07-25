// Select the theme button and the root html element.
const themeToggle = document.querySelector("#theme-toggle");
const rootElement = document.documentElement;

// Check whether the visitor's operating system prefers dark mode.
const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

// Check whether the visitor previously selected a theme.
const savedTheme = localStorage.getItem("article-card-theme");

// Use the saved preference first.
// If no preference was saved, use the operating system preference.
if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    setTheme("dark");
} else {
    setTheme("light");
}

// Change themes whenever the visitor clicks the toggle.
themeToggle.addEventListener("click", function () {
    const currentTheme = rootElement.dataset.theme;

    if (currentTheme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
});


/*
    This function changes the page theme and updates
    the button's accessible name and visible content.
*/
function setTheme(theme) {
    const icon = themeToggle.querySelector(".theme-toggle__icon");
    const text = themeToggle.querySelector(".theme-toggle__text");

    rootElement.dataset.theme = theme;
    localStorage.setItem("article-card-theme", theme);

    if (theme === "dark") {
        themeToggle.setAttribute("aria-pressed", "true");
        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        icon.textContent = "☀";
        text.textContent = "Light mode";
    } else {
        themeToggle.setAttribute("aria-pressed", "false");
        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        icon.textContent = "☾";
        text.textContent = "Dark mode";
    }
}
