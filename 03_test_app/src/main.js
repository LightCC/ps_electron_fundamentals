const electron = require('electron')
const countdown = require('./countdown')
const { ipcMain } = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

const windows = []

app.on('ready', _ => {
    [1, 2, 3].forEach(i => {
        let win = new BrowserWindow({
            title: `My Electron App (${i})`,
            backgroundColor: '#FFF',
            height: 400,
            width: 400,
            center: true,
            webPreferences: {
                nodeIntegration: true
            }
        })

        win.loadURL(`file://${__dirname}/countdown.html`)

        win.on('closed', _ => {
            console.log(`closed window #${i}!`)
            win = null
        })

        windows.push(win)
    })
})

ipc.on('countdown-start', _ => {
    countdown(count => {
        windows.forEach(win => {
            win.webContents.send('countdown', count)
        })
    })
})