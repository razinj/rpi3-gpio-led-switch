'use strict';

const router = require('express').Router();
const ledController = require('./controllers/led.controller');

router.get('/', (req, res) => {
    res.render('home', { 
        title: 'GPIO LED Switch',
        ledStatus: 'OFF'
    });
});

router.post('/ops/:action', (req, res) => {
    let action = req.params.action;
    if(action === 'off') {
        console.log('LED is ON');
        ledController.turnOn();
    } else {
        console.log('LED is OFF');
        ledController.turnOff();
    }
    // res.status(200).redirect('/')
});

module.exports = router;
