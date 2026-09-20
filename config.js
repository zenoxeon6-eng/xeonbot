const fs = require('fs')

global.prefa = ['','!','.',',','🗿']

// === LICENSE KEY FOR BUYERS ===
global.licenseKey = "XEON-A66F92B99D4F919EB69DE6FACDC0EB01";   // Buyer puts their key here
global.waownernumber = ["56932815564"]
global.tgownername = 'DGXeon13'

let file = require.resolve(__filename)
require('fs').watchFile(file, () => { 
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})