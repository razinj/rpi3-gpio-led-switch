'use strict';

module.exports = {
    index: async (req, res) => {
        return res.status(200).render('home', {
            title: 'LED Switch',
            ledStatus: 'OFF'
        });
    }
}