'use strict';


exports.getAll = function (request, response) {

    const service = request.locals.containers.services.people();
    
    service.getAll({}).then((serviceResponse) => {

        response.send(serviceResponse);

    }, (errorResponse) => {

        response.send(errorResponse);

    });

};

exports.getCharacterFrecuency = function (request, response) {

    const service = request.locals.containers.services.people();
    
    service.getCharacterFrecuency().then((serviceResponse) => {

        response.send(serviceResponse);

    }, (errorResponse) => {

        response.send(errorResponse);

    });

};

exports.getSimilarEmails = function (request, response) {

    const service = request.locals.containers.services.people();
    
    service.getSimilarEmails().then((serviceResponse) => {

        response.send(serviceResponse);

    }, (errorResponse) => {

        response.send(errorResponse);

    });

};