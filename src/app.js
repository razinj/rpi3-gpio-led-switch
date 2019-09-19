'use strict'

const app = require('express')();
const exphbs  = require('express-handlebars');
const path = require('path');
const { json } = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', '.hbs');

app.use(
    json(),
    morgan('tiny'),
    router
);

module.exports = app;
