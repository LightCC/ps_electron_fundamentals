const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 400,
        width: 900
    })

    mainWindow.loadURL(`file://${__dirname}/countdown.html`)
    mainWindow.webContents.openDevTools({ mode: 'right' })

    mainWindow.on('closed', _ => {
        console.log('closed!')
        mainWindow = null
    })
})