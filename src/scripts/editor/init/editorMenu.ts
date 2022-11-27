export const editorMenu = {
  menu: [
    {
      label: "File",
      submenu: [
        {
          label: "New Window",
          command: "application:new-window",
        },
        {
          label: "New File",
          command: "application:new-file",
        },
        {
          label: "Open File…",
          command: "application:open-file",
        },
        {
          label: "Open Folder…",
          command: "application:open-folder",
        },
        {
          type: "separator",
        },
        {
          label: "Settings",
          command: "application:show-settings",
        },
        {
          type: "separator",
        },
        {
          label: "Save",
          command: "core:save",
        },
        {
          label: "Save As…",
          command: "core:save-as",
        },
        {
          label: "Save All",
          command: "window:save-all",
        },
        {
          type: "separator",
        },
        {
          label: "Exit",
          command: "application:quit",
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Undo",
          command: "core:undo",
        },
        {
          label: "Redo",
          command: "core:redo",
        },
        {
          type: "separator",
        },
        {
          label: "Cut",
          command: "core:cut",
        },
        {
          label: "Copy",
          command: "core:copy",
        },
        {
          label: "Paste",
          command: "core:paste",
        },
        {
          label: "Select All",
          command: "core:select-all",
        },
      ],
    },
    {
      label: "View",
      submenu: [
        {
          label: "Toggle Full Screen",
          command: "window:toggle-full-screen",
        },
        {
          label: "Toggle Menu Bar",
          command: "window:toggle-menu-bar",
        },
        {
          label: "Developer",
          submenu: [
            {
              label: "Toggle Developer Tools",
              command: "window:toggle-dev-tools",
            },
          ],
        },
      ],
    },
  ],
};
