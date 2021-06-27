import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {faDiceD20} from "@fortawesome/free-solid-svg-icons/faDiceD20";
import {faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {

  faDiceD20 = faDiceD20
  faSkullCrossbones = faSkullCrossbones
  isOut: boolean = false;

  constructor(private auth: AngularFireAuth) {
    auth.user.subscribe(u => {
      this.isOut = u == null
    })
  }


  signOut = () => this.auth.signOut()
}
