import { newProject, projectType } from "./newProject";

export const projetCore = document.getElementById(
  "project-core"
) as HTMLElement;
const emptyProjBtn = document.getElementById(
  "empty-proj-btn"
) as HTMLButtonElement | null;
const htmlProjBtn = document.getElementById(
  "html-proj-btn"
) as HTMLButtonElement | null;
const javascriptProjBtn = document.getElementById(
  "javascript-proj-btn"
) as HTMLButtonElement | null;
const reactProjBtnt = document.getElementById(
  "react-proj-btn"
) as HTMLButtonElement | null;
const vueProjBtn = document.getElementById(
  "vue-proj-btn"
) as HTMLButtonElement | null;

emptyProjBtn?.addEventListener("click", () => {
  newProject(projectType.empty, { allowTypescript: false });
});

htmlProjBtn?.addEventListener("click", () => {
  newProject(projectType.html, { allowTypescript: false });
});

javascriptProjBtn?.addEventListener("click", () => {
  newProject(projectType.javascript, { allowTypescript: true });
});

reactProjBtnt?.addEventListener("click", () => {
  newProject(projectType.react, { allowTypescript: true });
});

vueProjBtn?.addEventListener("click", () => {
  newProject(projectType.vue, { allowTypescript: true });
});

window.onload = () => {
  projetCore.style.display = "none";
}
