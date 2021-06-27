import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {FormControl, Validators} from "@angular/forms";
import {environment} from "../../environments/environment"
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwordField = new FormControl("", [Validators.required])
  errorMessage: string | null = null;

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  async login() {
    this.errorMessage = null;
    await this.router.navigate(["/library"])
    const pass = this.passwordField.value
    const mail = environment.email
    this.auth.signInWithEmailAndPassword(mail, pass)
      .then((user) => {
        console.log(user)

      })
      .catch(error => {
        if (error.code == "auth/wrong-password"){
          this.errorMessage = "Mot de passe erroné"
        }
      });
  }

}
