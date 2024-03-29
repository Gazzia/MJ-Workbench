import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {faBookReader, faCheck, faDoorOpen, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {gameTypeList} from "../gameTypeList";
import {GameType} from "../shared/models/GameType";
import {GameLobby} from "../shared/models/GameLobby";
import {GameSelection} from "../shared/models/GameSelection";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {animate, animateChild, group, query, state, style, transition, trigger} from "@angular/animations";
import {flattenObject} from "../shared/utils";
import {GameService} from "../shared/services/game.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('void', style({transform: 'translateY(150px)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate('200ms ease-out')),
      transition(':leave', animate('200ms ease-in')),
    ]),
    trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),
      transition(':enter', group([
        query("@flyInOut", animateChild()),
        animate('200ms ease-out')
      ])),
      transition(':leave', group([
        query("@flyInOut", animateChild()),
        animate('200ms ease-in')
      ])),
    ])
  ]
})
export class LibraryComponent {
  gameTypeList: GameType[] = gameTypeList
  faDoorOpen: IconProp = faDoorOpen
  faPlus: IconProp = faPlus
  faBookReader: IconProp = faBookReader
  faCheck: IconProp = faCheck
  faTimes: IconProp = faTimes
  isOut: boolean = false;
  selection: GameSelection;
  gameLobbies: GameLobby[] = [];
  createForm: FormGroup;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private formBuilder: FormBuilder,
    private gameService: GameService
  ) {

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

    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      other: this.formBuilder.group({})
    });
  }

  getGamesOfType = (type: GameType) => {
    const gameLobby = this.gameLobbies.find(l => l.gameID == type.id);
    return gameLobby?.list;
  };

  goToLogin = () => this.router.navigate(["login"])

  /*
  Lorsqu'on change le bouton sélectionné, ça se répercute sur this.selection,
  et on modifie le formulaire de création en conséquence.
   */
  changeSelection(gameType: GameType, action: "CREATE" | "JOIN") {
    // modification du formulaire de création
    const otherGroup = this.createForm.controls.other as FormGroup;
    const props = gameType.creationProps;
    if (props.includes("startingHealth")) {
      otherGroup.addControl(
        "startingHealth",
        new FormControl(20, [Validators.required, Validators.min(1)])
      )
    } else {
      otherGroup.removeControl("startingHealth")
    }
    this.selection.set(gameType, action);
  }

  createGame() {
    const form = flattenObject(this.createForm.value);
    const game = this.gameService.create({
      gameType: this.selection.gameType,
      ...form
    })
    console.log(game)
  }

  formControlExists(formControlName: string): boolean {
    return this.selection.gameType?.creationProps.includes(formControlName) || false;
  }
}
