'use strict';

const router = require('express').Router();
const ledService = require('./services/led.service');

router.get('/', (req, res) => {
    res.status(200).render('home', {
        title: 'LED Switch',
        ledStatus: 'OFF'
    });
});

router.post('/ops/:action', (req, res) => {
    let action = req.params.action;
    if (action === 'on') {
        ledService.toggle();
        res.status(200).render('home', {
            title: 'LED Switch',
            ledStatus: 'ON'
        });
    } else {
        ledService.toggle();
        res.status(200).render('home', {
            title: 'LED Switch',
            ledStatus: 'OFF'
        });
    }
});

module.exports = router;
