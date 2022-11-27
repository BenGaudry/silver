import { open } from "@tauri-apps/api/dialog";
import { appDataDir } from "@tauri-apps/api/path";
import { tauriConsole } from "../interface/console";
// Open a selection dialog for directories
export async function openDirectory() {
  const dir = await open({
    directory: true,
    defaultPath: await appDataDir(),
  });
  console.log(dir)
  tauriConsole.log(dir)
  return dir;
}