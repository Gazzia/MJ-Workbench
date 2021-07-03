import {Game} from "../../guerredusale/shared/models/Game";

export class GameLobby{
  gameID: string;
  list: Game[];

  constructor(gameID: string, list: Game[]) {
    this.gameID = gameID;
    this.list = list;
  }
}
