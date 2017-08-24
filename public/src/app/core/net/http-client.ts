// Core Modules
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// Services
import { LocalStorageUtils } from './../browser/local-storage-utils';

@Injectable()
export class HttpClient {
    constructor(private http: Http, private localStorageUtils: LocalStorageUtils) {}

    getToken() {
        const token = this.localStorageUtils.getToken();
        if (token) {
            return token;
        }

        return null;
    }

    setToken(token) {
        this.localStorageUtils.setToken(token);
    }

    createAuthorizationHeader() {
        const headers = new Headers();

        // Set token
        const token = this.getToken();
        if (token) {
            headers.append('Authorization', token);
        }

        return headers;
    }

    // GET
    get(url) {
        const headers = this.createAuthorizationHeader();

        return this.http.get(url, { headers: headers });
    }

    // POST
    post(url, data) {
        const headers = this.createAuthorizationHeader();

        return this.http.post(url, data, { headers: headers });
    }

    // PUT
    put(url, data) {
        const headers = this.createAuthorizationHeader();

        return this.http.put(url, data, { headers: headers });
    }

    // DELETE
    delete(url) {
        const headers = this.createAuthorizationHeader();

        return this.http.delete(url, { headers: headers });
    }
}
