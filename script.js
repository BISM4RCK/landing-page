const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const clock = document.getElementById("clock");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

function updateThemeIcon() {
  toggle.textContent = root.dataset.theme === "dark" ? "☀" : "☾";
  toggle.setAttribute(
    "aria-label",
    root.dataset.theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
}

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
  updateThemeIcon();
});

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

updateThemeIcon();
updateClock();
setInterval(updateClock, 1000);
