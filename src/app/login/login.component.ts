import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  baseUrl = "https://localhost:4200/api/";
  accountBaseUrl = this.baseUrl + "Account/";
  nom : string | undefined; 
  password : string | undefined ;

  hidePassword = true;

  constructor(public http: HttpClient, public cookieService: CookieService) { }

  async connect(){
    let registerData = {
      username : this.nom,
      password : this.password
    }
    let result = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Login', registerData));
    console.log(result);
  }

  ngOnInit() {

  }

}
