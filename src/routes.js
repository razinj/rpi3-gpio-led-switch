'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    // res.status(200).json({ message: 'Welcome!' });
    res.render('home', { 
        title: 'GPIO LED Switch',
        ledStatus: 'OFF'
    });
});

module.exports = router;
