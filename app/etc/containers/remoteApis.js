'use strict';

module.exports = function (request, sessionVariables) {

    let containers = {};

    containers.salesLoftApi = function () {

        const SalesLoftApi = require('../../lib/remoteApis/SalesLoftApi.js');
        return new SalesLoftApi(request.locals.salesLoftApiUrl, sessionVariables.accessToken);

    };

    return containers;

};