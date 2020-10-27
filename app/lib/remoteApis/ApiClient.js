import axios from 'axios';

export class ApiClient {

    /**
     *Creates an instance of ApiClient.
     * @param {String} urlBase
     * @param {String} accessToken
     * @memberof ApiClient
     */
    constructor(urlBase, accessToken) {

        this.urlBase = urlBase;
        this.accessToken = accessToken;

        this.config = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        };

    }

    /**
     * Make a GET http call
     *
     * @param {String} url
     * @returns Promise
     * @memberof ApiClient
     */
    get(url) {
        let uri = this.urlBase + url;
        return axios.get(uri, this.config);
    }

}

module.exports = ApiClient;