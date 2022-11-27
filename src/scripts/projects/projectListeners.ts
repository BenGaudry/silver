import { tauriConsole } from "../interface/console";
import { newProject, projectType } from "./newProject";
import { openDirectory } from "./openFolder";

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

export const pathBtn = document.getElementById("path-btn") as HTMLButtonElement;

emptyProjBtn?.addEventListener("click", () => {
  newProject(projectType.empty, {
    allowTypescript: false,
    showCommandLine: false,
  });
});

htmlProjBtn?.addEventListener("click", () => {
  newProject(projectType.html, {
    allowTypescript: false,
    showCommandLine: false,
  });
});

javascriptProjBtn?.addEventListener("click", () => {
  newProject(projectType.javascript, {
    allowTypescript: true,
    showCommandLine: true,
  });
});

reactProjBtnt?.addEventListener("click", () => {
  newProject(projectType.react, {
    allowTypescript: true,
    showCommandLine: true,
  });
});

vueProjBtn?.addEventListener("click", () => {
  tauriConsole.log("Firing event")
  newProject(projectType.vue, { allowTypescript: true, showCommandLine: true });
});

pathBtn.addEventListener("mouseup", async (e) => {
  e.preventDefault()
  tauriConsole.log("Firing event")
  openDirectory();
})

window.onload = () => {
  projetCore.style.display = "none";
};
