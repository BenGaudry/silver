import { projetCore } from "./projectListeners";
import { WebviewWindow, getCurrent } from "@tauri-apps/api/window";

const createProjectBtn = document.getElementById(
  "create-project-btn"
) as HTMLButtonElement;

export enum projectType {
  empty,
  html,
  javascript,
  react,
  vue,
}

export interface projectOptions {
  allowTypescript?: boolean;
  showCommandLine?: boolean;
}

export function newProject(type: projectType, options?: projectOptions) {
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

function showInput(yes: boolean | undefined, element: HTMLElement): boolean {
  if (yes !== undefined && yes) {
    element.style.display = "block";
  } else if (yes !== undefined && !yes) {
    element.style.display = "none";
  }
  return yes !== undefined && yes;
}

createProjectBtn.addEventListener("mouseup", async () => {
  const curWin = getCurrent();
  curWin.hide();
  const webview = new WebviewWindow("editor", {
    url: "../../../editor.html",
    resizable: true,
    visible: true,
    center: true,
    maximized: true,
  });

  webview.onCloseRequested(() => {
    curWin.close();
  });
});
