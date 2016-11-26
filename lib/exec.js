
var Gpio = require('onoff').Gpio;
 var led = new Gpio(17,'out');

module.exports = function exec(params) {
 
     switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1)
        {
            led.writeSync(0); 
        }
        else 
        {
           led.writeSync(1);
           led.unexport();
        } 
     }
};
