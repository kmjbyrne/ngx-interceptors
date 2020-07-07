import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ConfigServiceTest {
    public api = environment.api;
    public redirect = '/';
    constructor() {}
}
