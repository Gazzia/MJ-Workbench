import { Injectable } from '@angular/core';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authGuard: AngularFireAuthGuard) { }

  isLoggedIn(): boolean {
    return true
  }
}
