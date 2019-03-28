'use strict';

const router = require('express').Router();
const ledController = require('./controllers/led.controller');

router.get('/', (req, res) => {
    res.status(200).render('home', { 
        title: 'LED Switch',
        ledStatus: 'OFF'
    });
});

router.post('/ops/:action', (req, res) => {
    let action = req.params.action;
    if(action === 'on') {
        ledController.turnOn();
        res.status(200).render('home', { 
            title: 'LED Switch',
            ledStatus: 'ON'
        });
    } else {
        ledController.turnOff();
        res.status(200).render('home', { 
            title: 'LED Switch',
            ledStatus: 'OFF'
        });
    }
});

module.exports = router;
