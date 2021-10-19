const noble = require('noble');

// Initialize Noble Scans
noble.on('stateChange', function(state) {
    if (state == 'poweredOn') {
        noble.startScanning()
    } else {
        noble.stopScanning()
    }
})

noble.on('discover', function(peripheral) {
    console.log(peripheral)
})