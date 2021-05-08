//Get Public IP
//npm install public-ip

const publicIp = require('public-ip');

(async () => {
    console.log(await publicIp.v4());
    //=> '123.123.123.123'

    console.log(await publicIp.v6());
    //=> 'fe80::100:f8ff:fe21:67af'

})();