import { BrowserWindow, BrowserWindowConstructorOptions } from "electron"
import { join } from "path";

interface ElectronWindow extends BrowserWindowConstructorOptions {
    content: BrowserWindow | null;
}

type ElectronWindows = {
    [key: string]: ElectronWindow;
}

const windows: ElectronWindows = {
    mainWindow: {
        content: null,
        frame: false,
        minWidth: 350,
        minHeight: 500,
        transparent: true,
        webPreferences: {
            preload: join(__dirname, "preload.js")
        }
    }
}

export default windows;