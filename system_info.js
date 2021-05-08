//Get System Info
//npm install systeminformation

const si = require('systeminformation');
si.osInfo().then(data => {
    console.log(data.platform);
    console.log(data.distro);
    console.log(data.release);
    console.log(data.kernel);
    console.log(data.arch);
    console.log(data.hostname);

});

si.system().then(data => {
    console.log(data.manufacturer);
    console.log(data.model);
    console.log(data.version);
    console.log(data.serial);
    console.log(data.uuid);
});