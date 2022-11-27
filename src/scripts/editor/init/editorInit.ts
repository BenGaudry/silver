import { WebviewWindow } from "@tauri-apps/api/window";

export interface EditorOptions {
  projectManagerWindow: any;
  openedProjectPath?: string;
}

export class Editor {
  public projectManagerWindow;
  constructor(options:EditorOptions) {
    this.projectManagerWindow = options.projectManagerWindow
    this.projectManagerWindow.hide()
  }

  init () {
    const webview = new WebviewWindow("editor", {
      url: "/src/templates/editor.html",
      resizable: true,
      visible: true,
      center: true,
      maximized: true,
    });

    webview.onCloseRequested(() => {
      this.projectManagerWindow.close()
    })
  }
}