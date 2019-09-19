'use strict';

const indexController = require('../controllers/index.controller');
const operationsController = require('../controllers/operations.controller')

module.exports = [
    {
        path: '/',
        method: 'get',
        middlewares: [],
        controller: indexController.index
    },
    {
        path: '/ops/:action',
        method: 'post',
        middlewares: [],
        controller: operationsController.operation
    }
]