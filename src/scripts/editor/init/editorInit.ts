import { Window, windowLocation } from "../../window/window";
import { editorMenu } from "./editorMenu";

export interface EditorOptions {
  projectManagerWindow: any;
  path: string;
}

export async function openEditor() {
  let editorWin = new Window(windowLocation.editor, { fullscreen: true });
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
