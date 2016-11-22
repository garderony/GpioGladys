
var Gpio = require('onoff').Gpio;
 var led = new Gpio(4,'out');

module.exports = function exec() {
            led.writeSync(0);     
};
