'use strict';

module.exports = function (request) {

    let containers = {};

    containers.people = function () {

        const Model = require('../../lib/models/people/PeopleModel');
        const salesLoftApi = request.locals.containers.remoteApis.salesLoftApi();

        return new Model(salesLoftApi);
    };

    return containers;

};