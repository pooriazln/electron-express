const { app, BrowserWindow } = require("electron")
const { startServer } = require("./api")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadURL("http://localhost:3000")
}

app.whenReady().then(() => {
  createWindow()
  startServer()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
      startServer()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
