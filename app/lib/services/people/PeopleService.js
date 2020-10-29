'use strict';

import q from 'q';

export class PeopleService {

    /**
     * Creates an instance of PeopleService.
     * @param {PeopleModel} model
     * @param {Object} helpers
     * @memberof PeopleService
     */
    constructor(model, helpers) {
        
        this.model = model;
        this.helpers = helpers;

    }

    /**
     * Get all persons
     *
     * @param {*} [query={}]
     * @returns Promise
     * @memberof PeopleService
     */
    getAll(query = {}) {

        const deferred = q.defer();

        this.model.getAll(query)
            .then((response) => {

                deferred.resolve(response.data);

            }, (response) => {

                deferred.reject(response);

            });

        return deferred.promise;
    }

    /**
     * Get character frecuency on all the existing people emails
     *
     * @returns Promise
     * @memberof PeopleService
     */
    getCharacterFrecuency() {

        const deferred = q.defer();

        this.processGetCharacterFrecuency()
            .then((response) => {

                deferred.resolve(response);

            }, (response) => {

                deferred.reject(response);

            });

        return deferred.promise;
    }

    /**
     * Process Get character frecuency
     *
     * @returns Promise
     * @memberof PeopleService
     */
    processGetCharacterFrecuency() {
        const deferred = q.defer();

        this.getAll().then((response) => {

            const people = response.data;
            let result = {};

            for (let person of people) {
                let email = person.email_address;
                if (email) {
                    for(let i = 0; i < person.email_address.length; i++) {
                        let key;
                        key = email.charAt(i);
                        
                        if (!result[key]) {
                            result[key] = 1;
                        } else {
                            result[key] = result[key] + 1;
                        }

                    }

                }

            }

            // Convert object to array
            const entries = Object.entries(result);
            result = entries.map((item) => {
                let obj = {};
                obj.key = item[0];
                obj.number = item[1];
                return obj;
            });

            deferred.resolve({
                data: result
            });

        }, (response) => {

            deferred.reject(response);

        });

        return deferred.promise;
    }

    /**
     * Get similar emails on all the existing poeple
     *
     * @returns Promise
     * @memberof PeopleService
     */
    getSimilarEmails() {

        const deferred = q.defer();

        this.getAll()
            .then((response) => {

                const emails = response.data.map((person) => {
                    return person.email_address;
                });
    
                this.processGetSimilarEmails(emails)
                    .then((response) => {

                        deferred.resolve(response);

                    }, (response) => {

                        deferred.reject(response);

                    });

            }, (response) => {

                deferred.reject(response);

            });

        return deferred.promise;
    }

    /**
     * 
     * Process a list of emails and find similar strings that fullfill the give max porcetange difference
     *
     * @param {Array<String>} emails
     * @returns Promise
     * @memberof PeopleService
     */
    processGetSimilarEmails(emails, distanceAllowed = 3) {
        const deferred = q.defer();
        let result = [];

        for (let i = 0; i < emails.length; i++) {

            let tmp = {
                email: emails[i],
                similarEmails: []
            };

            for (let j = 0 + 1; j < emails.length; j++) {

                if (i !== j && emails[i] !== emails[j]) {

                    const levenshtein = require('fast-levenshtein');

                    // let difference = this.helpers.string.getStringsPorcentageDiffence([...emails[i]], [...emails[j]]);
                    let difference = levenshtein.get(emails[i], emails[j]);
                    if (difference <= distanceAllowed) {
                        tmp.similarEmails.push(emails[j]);
                    }
                }

            }

            result.push(tmp);

        }

        deferred.resolve({
            data: result
        });

        return deferred.promise;
    }
    
}

module.exports = PeopleService;