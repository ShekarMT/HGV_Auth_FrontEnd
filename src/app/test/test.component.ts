import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../assets/Config';
import { AdalService } from 'adal-angular4';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public IsAuthenticated: boolean;
  private accessToken: string;
  private token;
  private response: any;
  private userResponse: any;
  private LoggedInUser: string;
  private role: string;
  private authenticatedUser: boolean;

  constructor(private authService: AdalService, private http: HttpClient) {

  }

  ngOnInit() {
      this.authService.handleWindowCallback();
      if (this.authService.userInfo.token !==  '') {
        this.IsAuthenticated = true;
        this.LoggedInUser = this.authService.userInfo.userName;
        this.authenticatedUser = true;
        this.role = 'Others';
      }
      // tslint:disable-next-line:one-line
      else {
        this.authenticatedUser = false;
        this.IsAuthenticated = false;
        this.LoggedInUser = '';
      }

  // }
  }



  Login() {
    this.authService.login();
    this.authService.handleWindowCallback();
    this.LoggedInUser = this.authService.userInfo.userName;
    this.authenticatedUser = true;
  }

  GetUserRole() {
    this.IsAuthenticated = true;
    this.authService.acquireToken(CONFIG.Settings.serviceClientId).subscribe(accessToken => {
      this.accessToken = accessToken;
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
      this.http.get(CONFIG.Settings.serviceUrl + '/GetUserRole', { headers, responseType : 'text'}).subscribe(userRole => {
        this.role = userRole;
     }, err => {
       console.log(err);
       this.role = 'Others';
     });
    },
    err => {
      // console.log(this.authService.config);
      console.log(err);
    });
  }

  Logout() {
    localStorage.clear();
    this.authService.logOut();
    this.IsAuthenticated = false;
    this.authenticatedUser = false;
  }

  TabSwitched($event: MatTabChangeEvent) {
    if ($event.tab.textLabel === 'Claims') {
      this.authService.acquireToken(CONFIG.Settings.serviceClientId).subscribe(accessToken => {
        this.accessToken = accessToken;
      },
      err => {
        // console.log(this.authService.config);
        console.log(err);
      });
      console.log('getting claims');
     this.http.get(CONFIG.Settings.serviceUrl + '/GetClaimListForUser', this.prepareOptions()).subscribe(data => {
      this.response = data;
     }, err => {
       console.log(err);
       this.response = [ 'Not' , 'Authorized'];
     });
    }
  }


  prepareOptions(): any {
    let headers = new HttpHeaders();
    headers = headers
        .set('Authorization', 'Bearer ' + this.accessToken);
    return { headers };
}

}
