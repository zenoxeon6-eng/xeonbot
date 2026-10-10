const fs = require('fs')

global.prefa = ['','!','.',',','🗿']

// === LICENSE KEY FOR BUYERS ===
global.licenseKey = "XEON-0C1446E7355B3163B91981584E03B286";   // Buyer puts their key here
global.waownernumber = ["56932815564"]
global.tgownername = 'DGXeon13'

let file = require.resolve(__filename)
require('fs').watchFile(file, () => { 
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
