'use strict';

import q from 'q';

export class PeopleService {

    /**
     * Creates an instance of PeopleService.
     * @param {PeopleModel} model
     * @param {Object} inputFilters
     * @memberof PeopleService
     */
    constructor(model, inputFilters) {
        
        this.model = model;
        this.inputFilters = inputFilters;

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

        this.model.getAll()
            .then((response) => {

                deferred.resolve(response.data);

            }, (response) => {

                deferred.reject(response);

            });

        return deferred.promise;
    }
    
}

module.exports = PeopleService;