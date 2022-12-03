import { open } from "@tauri-apps/api/dialog";
import { openEditor } from "../editor/init/editorInit";
import { appDataDir } from "@tauri-apps/api/path";
import { tauriConsole } from "../interface/console";

var currentDirectory: any;

export function getCurrentDirectory() {
  return currentDirectory;
}

export function setCurrentDirectory(newdir: any) {
  currentDirectory = newdir;
}

// Open a selection dialog for directories
export async function openDirectory() {
  const dir: any = await open({
    directory: true,
    defaultPath: await appDataDir(),
  }).then((res) => {
    tauriConsole.log(["dir", "hello"])
    if (res !== null) {
      openEditor({ projectPath: res.toString() });
    }
  });
  setCurrentDirectory(dir);
  return dir;
}
