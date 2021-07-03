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

  addPlayer(player: Player){
    player.game = this;
    this.players.push(player)
  }

  removePlayer(player: Player){
    const id = this.players.findIndex(p=>p.id == player.id);
    this.players.splice(id,  1);
  }
}
