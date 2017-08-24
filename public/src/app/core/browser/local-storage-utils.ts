// Core Modules
import { Injectable } from '@angular/core';

// Services
import { environment } from './../../../environments/environment';

@Injectable()
export class LocalStorageUtils {
    constructor() {}

    getToken() {
        const token = localStorage.getItem(environment.application.security.token_key);
        if (token) {
            return token;
        }

        return null;
    }

    setToken(token) {
        localStorage.setItem(environment.application.security.token_key, token);
    }
}
