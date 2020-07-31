const electron = require('electron')

const ipc = electron.ipcRenderer

console.log('Register Start button click...')
document.getElementById("start").addEventListener("click", _ => {
    ipc.send('countdown-start')
})

ipc.on('countdown', (event, count) => {
    document.getElementById('count').innerHTML = count
})