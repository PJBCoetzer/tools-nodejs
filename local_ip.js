// Get the local IP
// using built in OS module

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = {};

const resultsip = [];
const resultsmac = [];
//console.log(nets);

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            resultsip.push(net.address);
            resultsmac.push(net.mac);
            results[name].push(net.cidr);
            results[name].push(net.mac);
        }
    }
}

//console.log(results);

console.log(resultsip);
console.log(resultsmac);