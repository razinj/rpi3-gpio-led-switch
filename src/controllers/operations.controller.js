module.exports = {
    operation: async (req, res) => {
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
    }
}