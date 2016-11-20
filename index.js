/**
 * Created by utilisateur1 on 18/11/2016.
 */


module.exports = function (sails) {

    var exec = require('./lib/gpio.exec.js');

    var init = require('./lib/gpio.init.js');

    gladys.on('ready', function(){
        init();
    });

    return {
        exec,
        init
    };
};