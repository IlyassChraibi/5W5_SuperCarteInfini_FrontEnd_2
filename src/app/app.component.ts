import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperCarteInfini';
  baseUrl = "https://localhost:4200/api/";
  accountBaseUrl = this.baseUrl + "Account/";

  constructor(public http: HttpClient, public cookieService: CookieService, private fb: FormBuilder) {}

  async register(){
    let registerData = {
      email : "test@test.com",
      password : "Passw0rd!",
      passwordConfrim : "Passw0rd!",
    }
    let result = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Register', registerData));
    console.log(result);
  }



  async request(){
    let result = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'Data'));
    console.log(result);
  }

  async logout(){
    let result = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'Logout'));
    console.log(result);
  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['',[Validators.required]],
  });

  
}
