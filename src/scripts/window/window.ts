import { appWindow } from "@tauri-apps/api/window";

export enum windowLocation {
  projectManager,
  editor,
  settings,
}

export interface windowOptions {
  fullscreen?: boolean;
}

export class Window {
  location: windowLocation;
  options?: windowOptions;
  constructor(location: windowLocation, options?: windowOptions) {
    this.location = location;
    this.options = options;
  }

  async init(): Promise<boolean> {
    let url;
    switch (this.location) {
      case windowLocation.projectManager:
        url = "/index.html";
        break;
      case windowLocation.editor:
        url = "/src/templates/editor.html";
        break;
      case windowLocation.settings:
        url = "/src/templates/example.html";
        break;
      default:
        return false;
    }
    window.location.assign("/src/templates/editor.html");
    if (this.options?.fullscreen) {
      await appWindow.maximize();
    }
    return true;
  }
}
