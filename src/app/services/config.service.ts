import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    constructor() {

    }

    public getAdalConfig(): any {

        return {
            tenant: '41814658-1358-4ce7-b93d-bc3fce646e07',
            endpoints: {
                api: 'https://shekarmindtree.onmicrosoft.com/d1cb9241-6542-4627-a9fc-2958c0bfc6af',
            },
            // clientId: 'ee3e56f1-32fd-4d13-acbc-263c4fa3a748', // AAD app client id for this app
            clientId: 'd1cb9241-6542-4627-a9fc-2958c0bfc6af',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/',
            popUp : true
        };
    }
}
