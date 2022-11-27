import { tauriConsole } from "../interface/console";
import { newProject, projectTypes } from "./newProject";
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

var projectPath:any;

emptyProjBtn?.addEventListener("click", () => {
  newProject(projectTypes.empty, {
    allowTypescript: false,
    showCommandLine: false,
  });
});

htmlProjBtn?.addEventListener("click", () => {
  newProject(projectTypes.html, {
    allowTypescript: false,
    showCommandLine: false,
  });
});

javascriptProjBtn?.addEventListener("click", () => {
  newProject(projectTypes.javascript, {
    allowTypescript: true,
    showCommandLine: true,
  });
});

reactProjBtnt?.addEventListener("click", () => {
  newProject(projectTypes.react, {
    allowTypescript: true,
    showCommandLine: true,
  });
});

vueProjBtn?.addEventListener("click", () => {
  tauriConsole.log("Firing event");
  newProject(projectTypes.vue, {
    allowTypescript: true,
    showCommandLine: true,
  });
});

pathBtn.addEventListener("mouseup", async (e) => {
  e.preventDefault();
  projectPath = await openDirectory();
});

window.onload = () => {
  projetCore.style.display = "none";
};
