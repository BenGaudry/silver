import { call_vite } from "../../main";
import { projetCore } from "./projectListeners";

const createProjectBtn = document.getElementById("create-project-btn") as HTMLButtonElement

export enum projectType {
  empty,
  html,
  javascript,
  react,
  vue,
}

export interface projectOptions {
  allowTypescript?: boolean;
}

export function newProject(type: projectType, options?: projectOptions) {
  projetCore.style.display = "block";
  var toClone = "";

  const typescriptInputZone = document.getElementById(
    "typescript-input-zone"
  ) as HTMLDivElement;
  if (options !== undefined && options.allowTypescript === false) {
    typescriptInputZone.style.display = "none";
  } else if (options !== undefined && options.allowTypescript) {
    typescriptInputZone.style.display = "block";
  }

  switch (type) {
    case projectType.empty:
      toClone = "";
      break;

    case projectType.html:
      toClone = "";
      break;

    case projectType.javascript:
      toClone = "";
      break;

    case projectType.react:
      toClone = "";
      break;

    case projectType.vue:
      toClone = "";
      break;
  }
  
  return toClone;
}

createProjectBtn.addEventListener('mouseup', () => {
  call_vite("node -v")
})
