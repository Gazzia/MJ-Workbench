import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public auth: AngularFireAuth) { }

  login(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then(console.log)
  }

}
