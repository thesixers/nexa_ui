import { app, BrowserWindow, screen} from "electron";
import path from 'path'


let mainWindow;

async function createWindow() {
    const { height } = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: 400,
    height: height,
    resizable: false,
    icon: path.join('public', "app_icon.ico"),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const VITE_DEV_SERVER_URL = "http://localhost:6969"; // Ensure this matches your Vite server port

//   try {
    // await waitOn({ resources: [VITE_DEV_SERVER_URL], timeout: 30000 });
    mainWindow.loadURL(VITE_DEV_SERVER_URL);
//   } catch (error) {
//     console.error("Error waiting for Vite:", error);
//     app.quit();
//   }

  // 🛑 Prevent Autofill Errors in DevTools
//   session.defaultSession.webRequest.onBeforeRequest({ urls: ["devtools://*"] }, (details, callback) => {
//     if (details.url.includes("Autofill")) {
//       return callback({ cancel: true }); // Cancel Autofill requests
//     }
//     return callback({});
//   });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
