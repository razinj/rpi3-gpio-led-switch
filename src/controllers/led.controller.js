'use strict';

const Gpio = require('onoff').Gpio;
const led = new Gpio(4, 'out');

const turnOn = () => {
    led.write(1, error => {
        if(error) throw error;
    });
}
const turnOff = () => {
    led.write(0, error => {
        if(error) throw error;
    });
    led.unexport();
}

module.exports = {
    turnOn, 
    turnOff
}
