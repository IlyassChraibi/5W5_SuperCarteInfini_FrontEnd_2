import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  hidePassword = true;
  hideConfirmation = true;

  constructor(private http: HttpClient) {}

  register() {
    const registerData = {
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };

    this.http.post('https://localhost:7190/api/Account/Register', registerData, { withCredentials: true }).subscribe(
      (response: any) => {
        // L'inscription a réussi, redirigez l'utilisateur vers une page de connexion ou effectuez une autre action appropriée.
        console.log(response);
      },
      (error) => {
        // Gérez les erreurs d'inscription ici, affichez un message d'erreur, par exemple.
      }
    );
  }
}
