import {GuerreDuSale_Game} from "../../guerredusale/shared/models/GuerreDuSale_Game";

export class GameLobby{
  gameID: string;
  list: GuerreDuSale_Game[];

  constructor(gameID: string, list: GuerreDuSale_Game[]) {
    this.gameID = gameID;
    this.list = list;
  }
}
