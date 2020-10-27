'use strict';

let express = require('express');

module.exports = function () {

    let app = express();

    let bodyParser = require('body-parser');

    app.use(bodyParser.json({limit: '1mb'})); // support json encoded bodies
    app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

    let router = express.Router();

    require('./config/cors/config.js')(app);

    // function uses the specified middleware function or functions. 
    // It basically mounts middleware for the routes which are being served by the specific router.
    router.use((request, result, next) => {

        console.log('Middleware Called'); 
        require('dotenv').config();

        if (request.locals === undefined) {
            request.locals = {};
        }

        request.locals.salesLoftApiUrl = process.env.salesLoftApiUrl;

        let sessionVariables = {
            accessToken: process.env.SALESLOFT_API_KEY
        };

        require('./etc/containers.js')(request, sessionVariables);

        next();

    });

    app.use('/', router);

    require('./routes.js')(app);

    return app;

};