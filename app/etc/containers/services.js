'use strict';

module.exports = function (request) {

    let containers = {};

    containers.people = function () {

        const Service = require('../../lib/services/people/PeopleService');
        const model = request.locals.containers.models.people();
        const innputFilters = {};

        return new Service(model, innputFilters);
    };

    return containers;

};