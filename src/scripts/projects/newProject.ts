import { projetCore } from "./projectListeners";
import { tauriConsole } from "../interface/console";
import { getCurrentDirectory } from "./openDirectory";
import { openEditor } from "../editor/init/editorInit";

const createProjectBtn = document.getElementById(
  "create-project-btn"
) as HTMLButtonElement;

export enum projectTypes {
  none,
  empty,
  html,
  javascript,
  react,
  vue,
}

var selectedProjectType: projectTypes = projectTypes.none;

export interface projectOptions {
  allowTypescript?: boolean;
  showCommandLine?: boolean;
}

export function newProject(type: projectTypes, options?: projectOptions) {
  projetCore.style.display = "block";
  var toClone = "";

  const typescriptInputZone = document.getElementById(
    "typescript-input-zone"
  ) as HTMLDivElement;
  const defaultCommandInputZone = document.getElementById(
    "default-command-input-zone"
  ) as HTMLDivElement;

  showInput(options?.allowTypescript, typescriptInputZone);
  showInput(options?.showCommandLine, defaultCommandInputZone);

  switch (type) {
    case projectTypes.empty:
      toClone = "";
      selectedProjectType = projectTypes.empty;
      break;

    case projectTypes.html:
      toClone = "";
      selectedProjectType = projectTypes.html;
      break;

    case projectTypes.javascript:
      toClone = "";
      selectedProjectType = projectTypes.javascript;
      break;

    case projectTypes.react:
      toClone = "";
      selectedProjectType = projectTypes.react;
      break;

    case projectTypes.vue:
      toClone = "";
      selectedProjectType = projectTypes.vue;
      break;
  }

  return toClone;
}

function showInput(yes: boolean | undefined, element: HTMLElement): boolean {
  if (yes !== undefined && yes) {
    element.style.display = "block";
  } else if (yes !== undefined && !yes) {
    element.style.display = "none";
  }
  return yes !== undefined && yes;
}

function checkInputs(): boolean {
  if (
    getCurrentDirectory() !== null &&
    getCurrentDirectory() !== undefined &&
    getCurrentDirectory() !== ""
  ) {
    return true;
  } else return false;
}

createProjectBtn?.addEventListener("mouseup", async () => {
  if (checkInputs()) {
    openEditor()
  } else tauriConsole.log("Input(s) was(ere) empty");
});
