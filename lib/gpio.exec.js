/**
 * Created by utilisateur1 on 18/11/2016.
 */

var shared = require('./gpio.shared.js');
var Gpio = require('onoff').Gpio;
var  iv;

module.exports = function(params) {
    var arr = params.deviceType.identifier;
    var gpioId = arr[0];

    var led = new Gpio(shared.gpios[gpioId],'out');

    switch(params.deviceType.type){
        case 'binary':
            if(params.state.value === 1){
                led.writeSync(0);
            } else {
                led.writeSync(1);
            }
            break;
    }

};
