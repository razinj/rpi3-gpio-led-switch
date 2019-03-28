'use strict'

require('dotenv').config();

const http = require('http');
const app = require('./src/app');
const server = http.createServer(app);

server.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`[!] Listening on : http://${process.env.HOST}:${process.env.PORT}`);
});
