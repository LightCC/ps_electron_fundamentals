const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        title: "My Electron App",
        backgroundColor: '#FFF',
        height: 800,
        width: 1200,
        //show: false, // will hide the window initially
        center: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(`file://${__dirname}/countdown.html`)
    mainWindow.webContents.openDevTools({
        mode: 'right'
    })
    console.log(mainWindow.getContentBounds())
    //mainWindow.setBounds({ width: 200 })
    //console.log(mainWindow.getContentBounds().toString())


    mainWindow.on('closed', _ => {
        console.log('closed!')
        mainWindow = null
    })
})