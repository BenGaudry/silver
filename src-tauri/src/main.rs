#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn call_vite(toexecute: &str) {
    println!("{}", toexecute);
    use std::process::Command;

    let mut first_command = Command::new(toexecute);

    first_command.arg("-version");
}

#[tauri::command]
fn tauri_log(message: &str) {
    println!("{}", message);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![call_vite, tauri_log])
        .setup(|app| {
            let splashscreen_window = app.get_window("splashscreen").unwrap();
            let main_window = app.get_window("main").unwrap();
            // we perform the initialization code on a new task so the app doesn't freeze
            tauri::async_runtime::spawn(async move {
                // initialize your app here instead of sleeping :)
                println!("Initializing...");
                std::thread::sleep(std::time::Duration::from_secs(1));
                println!("Done initializing.");

                // After it's done, close the splashscreen and display the main window
                splashscreen_window.close().unwrap();
                main_window.show().unwrap();
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
