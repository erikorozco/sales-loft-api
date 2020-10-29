'use strict';

module.exports = function(request, sessionVariables) {
    
    request.locals.containers = {};

    request.locals.containers.services = require('./containers/services.js')(request);

    request.locals.containers.models = require('./containers/models.js')(request);
    
    request.locals.containers.remoteApis = require('./containers/remoteApis.js')(request, sessionVariables);

    request.locals.containers.helpers = require('./containers/helpers.js')();

};