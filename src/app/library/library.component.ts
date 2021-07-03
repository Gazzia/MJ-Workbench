import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {faBookReader, faDoorOpen, faPlus, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {gameTypeList} from "../gameTypeList";
import {GameType} from "../shared/models/GameType";
import {GameLobby} from "../shared/models/GameLobby";
import {GameSelection} from "../shared/models/GameSelection";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  gameTypeList: GameType[] = gameTypeList
  faDoorOpen: IconDefinition = faDoorOpen
  faPlus: IconDefinition = faPlus
  faBookReader: IconDefinition = faBookReader
  isOut: boolean = false;
  selection: GameSelection;
  gameLobbies: GameLobby[] = [];

  constructor(private auth: AngularFireAuth, private router: Router) {
    // mise en place d'une sélection vide
    this.selection = new GameSelection();

    // souscription à l'auth state
    auth.user.subscribe(user => {
      this.isOut = (user == null)
    })

    // mise en place de la liste des lobbies
    gameTypeList.forEach((type) => {
      const lobby = new GameLobby(type.id, []);
      this.gameLobbies.push(lobby)
    })
  }

  goToLogin = () => this.router.navigate(["login"])
}
