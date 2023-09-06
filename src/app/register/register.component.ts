import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  baseUrl = "https://localhost:4200/api/";
  accountBaseUrl = this.baseUrl + "Account/";
  nom : string | undefined; 
  password : string | undefined ;
  passwordConf : string | undefined ;

  hidePassword = true;
  hideConfirmation = true;

  constructor(public http: HttpClient, public cookieService: CookieService) { }

  
  if(){
    this.connect()
  }
  
  async connect(){
    let registerData = {
      username : this.nom,
      password : this.password
    }
    let result = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Login', registerData));
    console.log(result);
  }

  async register(){
    let registerData = {
      email : "test@test.com",
      password : "Passw0rd!",
      passwordConfrim : "Passw0rd!",
    }
    let result = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Register', registerData));
    console.log(result);
  }

  
  ngOnInit() {
    
  }

}
