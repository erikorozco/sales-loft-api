'use strict';

import ApiClient from './ApiClient.js';

export class RemoteApiBase extends ApiClient {

    /**
     *Creates an instance of RemoteApiBase.
     * @param {String} urlBase
     * @param {String} accessToken
     * @memberof RemoteApiBase
     */
    constructor(urlBase, accessToken) {
        super();

        this.api = new ApiClient(urlBase, accessToken);

    }

}


module.exports = RemoteApiBase;