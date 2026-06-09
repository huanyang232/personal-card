const themeButtons = Array.from(document.querySelectorAll(".theme-option"));
const storedTheme = window.localStorage.getItem("business-card-theme");
const validThemes = new Set(themeButtons.map((button) => button.dataset.themeValue));

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeValue === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

applyTheme(validThemes.has(storedTheme) ? storedTheme : "minimal");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = button.dataset.themeValue;
    applyTheme(nextTheme);
    window.localStorage.setItem("business-card-theme", nextTheme);
  });
});
