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
  private response: any;
  private userResponse: any;

  constructor(private authService: AdalService, private http: HttpClient) {

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

  // }
  }



  Login() {
    this.authService.login();
    this.IsAuthenticated = true;
  }

  Logout() {
    localStorage.clear();
    this.authService.logOut();
    this.IsAuthenticated = false;
  }

  GetData() {
    // this.token = this.authService.userInfo.token;
    this.authService.acquireToken(CONFIG.Settings.serviceClientId).subscribe(accessToken => {
      this.accessToken = accessToken;
    },
    err => {
      // console.log(this.authService.config);
      console.log(err);
    });

     this.http.get(CONFIG.Settings.serviceUrl, this.prepareOptions()).subscribe(data => {
      this.response = data;
   }, err => {
     console.log(err);
     this.response = [ 'Not' , 'Authorized'];
   });
  }

  prepareOptions(): any {
    let headers = new HttpHeaders();
    headers = headers
        .set('Authorization', 'Bearer ' + this.accessToken);
    return { headers };
}

}
