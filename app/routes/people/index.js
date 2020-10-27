'use strict';

module.exports = function (app) {

    let controller = require('../../controllers/people/index.js');

    app.get('/people/', controller.getAll);
    
    app.get('/people/character-frecuency', controller.getCharacterFrecuency);
    
    app.get('/people/similar-emails', controller.getSimilarEmails);
    

};