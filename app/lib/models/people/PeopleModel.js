'use strict';

import q from 'q';

export class PeopleModel {

    /**
     * Creates an instance of PeopleModel.
     * @param {SalesLoftApi} salesLoftApi
     * @memberof PeopleModel
     */
    constructor(salesLoftApi) {
        this.salesLoftApi = salesLoftApi;
    }

    /**
     * Calls remote salesLoftApi to get people data
     *
     * @returns Promise
     * @memberof PeopleModel
     */
    getAll() {
        
        const deferred = q.defer();
        const url = 'people.json';
        const paramsArray = [];

        const params = (paramsArray.length > 0) ? '?' + paramsArray.join('&') : '';
        const uri = url + params;

        this.salesLoftApi.getAll(uri).then((response) => {
            deferred.resolve(response);
        }, (error) => {
            deferred.reject(error);
        });

        return deferred.promise;
    }

}

module.exports = PeopleModel;