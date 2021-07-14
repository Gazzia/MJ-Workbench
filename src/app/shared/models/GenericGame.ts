import {GenericPlayer} from "./GenericPlayer";

export class GenericGame{
  id: any;
  gameType_id: any;
  name: string;
  players: GenericPlayer[] = [];
  started: boolean = false;

  constructor(name: string, gameType_id: string) {
    this.name = name;
    this.gameType_id = gameType_id
  }

  addPlayer(player: GenericPlayer){
    player.game = this;
    this.players.push(player)
  }

  removePlayer(player: GenericPlayer){
    const id = this.players.findIndex(p=>p.id == player.id);
    this.players.splice(id,  1);
  }
}
