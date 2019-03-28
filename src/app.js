'use strict'

const app = require('express')();
const exphbs  = require('express-handlebars');
const path = require('path');
const { json } = require('body-parser');
const morgan = require('morgan');
const api = require('./routes');

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', '.hbs');

app.use(
    json(),
    morgan('tiny'),
    api
);

module.exports = app;
