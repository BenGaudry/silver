import { invoke } from "@tauri-apps/api";

export class tauriConsole {
  static async log(message: string | string[] | null) {
    if (typeof message === "string") {
      await invoke("tauri_log", { message: message });
    } else if (typeof message === "object") {
      if (message?.length !== undefined) {
        var newMessage = "";
        for (let i = 0; i < message.length; i++) {
          newMessage =
            newMessage === "" ? message[i] : newMessage + " " + message[i];
        }
        await invoke("tauri_log", { message: newMessage });
      }
    }
  }
}
