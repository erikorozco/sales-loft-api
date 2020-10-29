'use strict';

module.exports = function (request) {

    let containers = {};

    containers.people = function () {

        const Service = require('../../lib/services/people/PeopleService');
        const model = request.locals.containers.models.people();
        const helpers = {
            string: request.locals.containers.helpers.string()
        };

        return new Service(model, helpers);
    };

    return containers;

};