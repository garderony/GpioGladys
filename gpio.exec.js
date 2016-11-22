
var Gpio = require('onoff').Gpio;
 var led = new Gpio(4,'out');

module.exports = function exec(params) {
 if(params === 0){           
 led.writeSync(0); 
 }
 else{
 led.writeSync(1);
 }
};
