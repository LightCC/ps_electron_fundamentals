const electron = require('electron')
const { BrowserWindow, Menu } = require('electron')

const app = electron.app

app.on('ready', _ => {
    new BrowserWindow()

    const name = electron.app.getName()
    const template = [{
        label: name,
        submenu: [{
            label: `About ${name}`,
            click: _ => {
                console.log('clicked about')
            },
            role: 'about'
        }, {
            type: 'separator'
        }, {
            label: 'Quit',
            click: _ => {
                app.quit()
            },
            accelerator: 'Ctrl+Q'
        }]
    }]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
})
