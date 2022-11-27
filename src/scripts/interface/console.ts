import { invoke } from "@tauri-apps/api";

export class tauriConsole {
  static async log (message:string | string[] | null) {
    await invoke("tauri_log", {message: message})
  }
}
git 