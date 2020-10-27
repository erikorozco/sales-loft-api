'use strict';

module.exports = function (app) {

    app.use(function (request, response, next) {

        // enable the origin to dictate the "Access-Control-Allow-Origin"
        let origin = '*';
        if (request.headers && request.headers.origin) {
            origin = request.headers.origin;
        }

        response.header('Access-Control-Allow-Credentials', 'true');
        response.header('Access-Control-Allow-Origin', origin);
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Bearer');

        if (request.method === 'OPTIONS') {
            return response.sendStatus(200); // stop here; otherwise a cookie is created for each OPTIONS call
        }

        next();

    });

};

// EOF