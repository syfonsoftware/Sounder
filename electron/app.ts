import { app, BrowserWindow, Menu } from "electron";
import windows from "./windows";

const createWindow = () => {
    Menu.setApplicationMenu(null);
    windows.mainWindow.content = new BrowserWindow({
        frame: windows.mainWindow.frame,
        minWidth: windows.mainWindow.minWidth,
        minHeight: windows.mainWindow.minHeight,
        transparent: windows.mainWindow.transparent,
        webPreferences: windows.mainWindow.webPreferences,
    });
    windows.mainWindow.content.loadURL("http://localhost:3000");
    windows.mainWindow.content.webContents.openDevTools();
    windows.mainWindow.content.on("closed", () => windows.mainWindow.content = null);
}

app.on("ready", createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (windows.mainWindow.content === null) {
        createWindow();
    }
})
