import { tauriConsole } from "../../interface/console";
import { Window, windowLocation } from "../../window/window";
import { editorMenu } from "./editorMenu";

export interface EditorOptions {
  projectPath?: string;
}

export function openEditor(options?: EditorOptions) {
  let path = "";
  if (options?.projectPath !== undefined) {
    path = options.projectPath;
  } else {
    path = "No path"
  }
  tauriConsole.log(path)
  let editorWin = new Window(windowLocation.editor, {
    fullscreen: true,
    projectPath: path,
  });
  editorWin.init();
  renderMenu();
}

export async function renderMenu() {
  for (let i in editorMenu) {
    const renderer = document.getElementById(
      "directories-list"
    ) as HTMLPreElement;
    renderer.innerText += editorMenu[i];
  }
}
