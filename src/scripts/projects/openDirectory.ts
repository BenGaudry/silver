import { open } from "@tauri-apps/api/dialog";
import { appDataDir } from "@tauri-apps/api/path";

var currentDirectory:any;

export function getCurrentDirectory() {
  return currentDirectory;
}

export function setCurrentDirectory(newdir:any) {
  currentDirectory = newdir;
}

// Open a selection dialog for directories
export async function openDirectory() {
  const dir = await open({
    directory: true,
    defaultPath: await appDataDir(),
  });
  setCurrentDirectory(dir);
  return dir;
}
