import { open } from "@tauri-apps/api/dialog";
import { openEditor } from "../editor/init/editorInit";
import { appDataDir } from "@tauri-apps/api/path";

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
  }).then(() => {
    openEditor({ projectPath: dir });
  });
  setCurrentDirectory(dir);
  return dir;
}
