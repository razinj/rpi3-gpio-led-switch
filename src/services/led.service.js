'use strict';

const Gpio = require('onoff').Gpio;
const led = new Gpio(4, 'out');
const util = require('util');

const toggle = () => {
    const readLed = util.promisify(led.read);
    const state = await readLed();
    led.write(state === 0 ? 1 : 0, (err, value) => {
        throw err;
    });
}

module.exports = {
    toggle
}
