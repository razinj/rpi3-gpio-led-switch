'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { 
        title: 'GPIO LED Switch',
        ledStatus: 'OFF'
    });
});

router.post('/ops/:action', (req, res) => {
    let action = req.params.action;
    if(action === 'on') {
        
    }
    // res.status(200).redirect('/')
});

module.exports = router;
