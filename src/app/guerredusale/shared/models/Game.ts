import {Player} from "./Player";

export class Game{
  id: any;
  gameType_id: any;
  name: any;
  players: Player[] = [];
  started: boolean = false;
  startingHealth = 20;
  constructor() {
  }
}
