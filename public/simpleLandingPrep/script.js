import { renderQuiz } from "./quizRenderer.js";
import { renderContact } from "./contactRenderer.js";


export function renderPage(path) {
  if (path === "home" || path === "") renderQuiz();
  else if (path === "contact") renderContact();
}

document.addEventListener("click", (e) => {
  if (e.target.matches("a.navLink")) {
    e.preventDefault();
    const path = e.target.dataset.path;
    window.location.hash = path || "home";
    const href = e.target.getAttribute("href");
    window.location.hash = href.slice(1);
  }
});

window.addEventListener("hashchange", () => {
  const path = location.hash.slice(1);
  renderPage(path);
});

window.addEventListener("load", () => {
  const path = location.hash.slice(1) || "home";
  renderPage(path);
});
