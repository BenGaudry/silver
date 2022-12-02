import { appWindow } from "@tauri-apps/api/window";
import { tauriConsole } from "../interface/console";

export enum windowLocation {
  projectManager,
  editor,
  settings,
}

export interface windowOptions {
  fullscreen?: boolean;
  projectPath?: string;
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
    window.location.assign(url);
    if (this.options?.fullscreen) {
      appWindow.maximize();
    }
    const body = document.querySelector("body") as HTMLBodyElement
    if (this.options?.projectPath !== undefined) {
      tauriConsole.log("Path:")
      tauriConsole.log(this.options.projectPath)
    } else {
      tauriConsole.log("No path specified")
    }
    
    body.innerHTML += this.options?.projectPath;
    return true;
  }
}
