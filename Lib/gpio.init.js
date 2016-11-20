/**
 * Created by utilisateur1 on 18/11/2016.
 */

var shared = require('./gpio.shared.js');
module.exports = function init() {
                return gladys.device.create({
                    device: {
                        name: 'lumiere',
                        protocol: 'gpio',
                        service: 'lumiere',
                        identifier: 1
                    },
                    types: []
                });
};