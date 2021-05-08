//Scan network for devices with a start mac address
//npm install local-devices

const network_scan = require('local-devices');

network_scan().then(async devices => {
    console.log(devices);

    //get a list of devices startigng with mac 70:88:6B:
    console.log('Awair Devices - mac: 70:88:6B:');
    var result = devices.filter((obj) => obj.mac.toUpperCase().slice(0, 9) === "70:88:6B:");

    if ((result) && (result.length > 0)) {
        for (const obj of result) {
            console.log(obj.ip + '|' + obj.mac);
        }
    } else { console.log('No Match Found'); }

});

