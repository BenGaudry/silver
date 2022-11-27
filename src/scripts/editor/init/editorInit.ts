import { appWindow } from "@tauri-apps/api/window";

export interface EditorOptions {
  projectManagerWindow: any;
  path: string;
}

export async function openEditor() {
  window.location.assign("/src/templates/editor.html");
  await appWindow.maximize()
}

export async function loadEditorContent() {
  
}
