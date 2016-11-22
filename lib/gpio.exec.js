/**
 * Created by utilisateur1 on 18/11/2016.
 */

var shared = require('./gpio.shared.js');
var Gpio = require('onoff').Gpio;
var  iv;

module.exports = function(params) {
    var led = new Gpio(4,'out');
            led.writeSync(0);     
};
