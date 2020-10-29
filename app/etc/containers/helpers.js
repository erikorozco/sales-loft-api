'use strict';

module.exports = function () {

    let containers = {};

    /**
     * Helper: Access
     *
     * @since 0.1.0
     *
     * @returns {AccessHelper}
     */
    containers.string = function () {

        let container;

        let StringHelper = require('../../lib/helpers/StringHelper');

        container = new StringHelper();

        return container;
    };

    return containers;

};