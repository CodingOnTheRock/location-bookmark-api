// Core Modules
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class HttpClient {
    constructor(private http: Http) {}

    // GET
    get(url: string, options: RequestOptionsArgs) {

        return this.http.get(url, options);
    }

    // POST
    post(url, data, options) {
        return this.http.post(url, data, options);
    }

    // PUT
    put(url, data, options) {
        return this.http.put(url, data, options);
    }

    // DELETE
    delete(url, options) {
        return this.http.delete(url, options);
    }
}
