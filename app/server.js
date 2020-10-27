'use strict';

require('dotenv').config();

let express = require('./config.js');
let app = express();

// const PORT = process.env.PORT;
const SALESLOFT_API_KEY = process.env.SALESLOFT_API_KEY;

let start = Date.now();
let log = function (message) {
    console.log('[' + (Date.now() - start) + '] ' + message);
};

const port = process.env.port;

app.listen(port);
log(SALESLOFT_API_KEY);
log('Server running on http port ' + port);