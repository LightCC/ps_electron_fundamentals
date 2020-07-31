const electron = require('electron')

const ipc = electron.ipcRenderer

console.log('Register Start button click...')
document.getElementById("start").addEventListener("click", _ => {
    ipc.send('countdown-start')
})
