// Core Modules
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageUtils {
    constructor() {}

    getToken(key: string) {
        const token = localStorage.getItem(key);
        if (token) {
            return token;
        }

        return null;
    }

    setToken(key: string, token: string) {
        localStorage.setItem(key, token);
    }
}
