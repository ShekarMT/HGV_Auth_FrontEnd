import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../assets/Config';
import { AdalService } from 'adal-angular4';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public IsAuthenticated: boolean;
  private accessToken: string;
  private token;
  // private authContext;
  // private isCallback;
  private response: any;
  private userResponse: any;

  constructor(private authService: AdalService, private http: HttpClient) {
  //   this.IsAuthenticated = false;
  //   this.authService.init(environment.config);
  //   this.authContext = new AuthenticationContext({
  //     instance: 'https://login.microsoftonline.com/',
  //     tenant: CONFIG.Settings.aadTenant,
  //     clientId: CONFIG.Settings.spaClientId,
  //     postLogoutRedirectUri: window.location.origin,
  //     cacheLocation: 'localStorage',
  // });

  }

  ngOnInit() {
      this.authService.handleWindowCallback();
      if (this.authService.userInfo.token !==  '') {
        this.IsAuthenticated = true;
      }
      // tslint:disable-next-line:one-line
      else {
        this.IsAuthenticated = false;
      }
      console.log(this.authService.userInfo);
  //   this.isCallback = this.authContext.isCallback(window.location.hash);
  //   if (this.isCallback) {
  //     this.authContext.handleWindowCallback();
  // }
  }



  Login() {
    // this.accessToken = this.authService.login();
    // console.log('Login Fired!');
    // this.authService.login();
    this.authService.login();
    this.IsAuthenticated = true;
  }

  Logout() {
    localStorage.clear();
    // console.log('Logout Fired!');
    this.authService.logOut();
    this.IsAuthenticated = false;
    // localStorage.clear();
    // this.authService.logout();
    // this.authService.logOut();
  }

  GetData() {
    // console.log('Accessing JWT Token --->');
    this.token = this.authService.userInfo.token;

    // console.log('User Profile Details');
    // console.log(this.authService.userInfo.profile);
    // console.log(this.token);
    // acquireToken('serviceClientId', function (err, res) {
    //   console.log('Accessing Access Token --->');
    //   this.accessToken = res;
    //   console.log(this.accessToken);
    // });
    // console.log('Aquiring Access Token');
    this.authService.acquireToken(CONFIG.Settings.serviceClientId).subscribe(accessToken => {
      this.accessToken = accessToken;
      console.log('Access Token => ' + this.accessToken);
    },
    err => {
      // console.log(this.authService.config);
      console.log(err);
    });

    // console.log('trying to hit API');
     this.http.get(CONFIG.Settings.serviceUrl, this.prepareOptions()).subscribe(data => {
      // console.log('API Hit. Response is ' + data.toString());
      this.response = data;
   }, err => {
     console.log(err);
     this.response = [ 'Not' , 'Authorized'];
   });
  }

  // GetUser() {
  //   this.authService.acquireToken(CONFIG.Settings.spaClientId).subscribe(accessToken => {
  //     this.accessToken = accessToken;
  //     console.log('Access Token => ' + this.accessToken);
  //   },
  //   err => {
  //     // console.log(this.authService.config);
  //     console.log(err);
  //   });

  //   this.http.get('https://graph.microsoft.com/beta/me/', this.prepareOptions()).subscribe(data => {
  //     console.log('API Hit. Response is ' + data.toString());
  //     this.userResponse = data;
  //  }, err => {
  //    console.log(err);
  //    this.userResponse = [ 'Did not' , 'Access', 'Graph API'];
  //  });
  // }

  prepareOptions(): any {
    let headers = new HttpHeaders();
    headers = headers
        // .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this.accessToken);
    return { headers };
}

}
