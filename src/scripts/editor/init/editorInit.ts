import { WebviewWindow } from "@tauri-apps/api/window";

export interface EditorOptions {
  projectManagerWindow: any;
  path: string;
}

export class Editor {
  public projectManagerWindow;
  public path;
  constructor(options: EditorOptions) {
    this.projectManagerWindow = options.projectManagerWindow;
    this.path = options.path;
    this.projectManagerWindow.hide();
  }

  create() {
    const webview = new WebviewWindow("editor", {
      url: "/src/templates/editor.html",
      resizable: true,
      visible: true,
      center: true,
      maximized: true,
    });

    webview.onCloseRequested(() => {
      this.projectManagerWindow.close();
    });
  }

  init(doc: Document) {
    const lister = doc.getElementById(
      "directories-list"
    ) as HTMLPreElement;
    lister.textContent = this.path;
  }
}
