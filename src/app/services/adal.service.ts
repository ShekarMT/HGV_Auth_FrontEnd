// import { Injectable } from '@angular/core';
// import * as Msal from 'msal';

// export class AuthService {
// private applicationConfig: any = {
//     clientID: 'ee3e56f1-32fd-4d13-acbc-263c4fa3a748',
//     //authority: 'https://login.microsoftonline.com/tfp/shekarmindtree.onmicrosoft.com/B2C_1_Signup1',
//     authority: 'https://shekarmindtree.onmicrosoft.com/a03abda4-54ad-4501-9b16-a54b8c13ddcc',
//     graphScopes: ['user.read']
// };
// private app: any;
// private accessToken: any;

// constructor() {//this.applicationConfig.authority
//     this.app = new Msal.UserAgentApplication(this.applicationConfig.clientID,'' , () => {
//         // callback for login redirect
//     });
// }

// public login() {
//     return this.app.loginPopup(this.applicationConfig.graphScopes)
//         .then(idToken => {
//             this.accessToken = this.app.acquireTokenSilent(this.applicationConfig.graphScopes);
//             const user = this.app.getUser();
//             console.log('Access Token Acquired - ' + this.accessToken);
//         }, () => {
//             return null;
//         });
// }


// public logout() {
//     this.app.logout();
// }


// public getToken() {
//     return this.app.acquireTokenSilent(this.applicationConfig.graphScopes)
//         .then(accessToken => {
//             return accessToken;
//         }, error => {
//             return this.app.acquireTokenPopup(this.applicationConfig.graphScopes)
//                 .then(accessToken => {
//                     return accessToken;
//                 }, err => {
//                     console.error(err);
//                 });
//         });
// }
// }

import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';

// import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js';

// const createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@Injectable()
export class AdalService {

    // private context: adal.AuthenticationContext;

    // constructor(private configService: ConfigService) {

    //     this.context = new createAuthContextFn(configService.getAdalConfig());
    //     if (this.context.isCallback(window.location.hash)) {
    //         this.context.handleWindowCallback();
    //     }
    // }


    // login() {
    //     console.log('Inside Services Login');
    //     this.context.login();
    // }

    // logout() {

    //     this.context.logOut();

    // }

    // handleCallback() {

    //     this.context.handleWindowCallback();

    // }

    // public get userInfo() {

    //     return this.context.getCachedUser();

    // }

    // public accessToken() {

    //     return this.context.getCachedToken(this.configService.getAdalConfig().clientId);

    // }

    // public get isAuthenticated() {

    //     return this.userInfo && this.accessToken;

    // }

}
