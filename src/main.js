const electron = require('electron')
const countdown = require('./countdown')
const { ipcMain } = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        title: "My Electron App",
        backgroundColor: '#FFF',
        height: 800,
        width: 1200,
        center: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(`file://${__dirname}/countdown.html`)

    mainWindow.on('closed', _ => {
        console.log('closed!')
        mainWindow = null
    })
})

ipc.on('countdown-start', _ => {
    countdown(count => {
        mainWindow.webContents.send('countdown', count)
    })
})