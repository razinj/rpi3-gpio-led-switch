'use strict';

const router = require('express').Router();
const routes = require('./config/routes');

/**
 * Go through each route object in routes array defined in config/route
 * and put the controller after all the middlewares using .push()
 * then using the route.method for the router methods for example:
 *  router['get'] or router['post']
 * after that using the route.path as the first param for the router
 * and lastly using spread syntaxt to spread the array middlewares.
 */
routes.forEach((route) => {
    route.middlewares.push(route.controller);
    router[route.method](route.path, ...route.middlewares);
});

module.exports = router;
