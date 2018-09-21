const {app, BrowserWindow} = require('electron')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', () => { app.quit() })
}

app.on('ready', createWindow)
