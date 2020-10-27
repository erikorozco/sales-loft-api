'use strict';

import RemoteApiBase from './RemoteApiBase.js';

export class SalesLoftApi extends RemoteApiBase { 

    /**
     *Creates an instance of SalesLoftApi.
     * @param {String} urlBase
     * @param {String} accessToken
     * @memberof SalesLoftApi
     */
    constructor(urlBase, accessToken) {
        super(urlBase, accessToken);
    }

    /**
     * Call RemoteApiBase GET 
     *
     * @param {*} url
     * @returns
     * @memberof SalesLoftApi
     */
    getAll (url) {
        return this.api.get(url);
    }

}

module.exports = SalesLoftApi;