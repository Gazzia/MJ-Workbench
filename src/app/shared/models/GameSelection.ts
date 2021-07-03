import {GameType} from "./GameType";

export class GameSelection{
  gameType: GameType | null;
  action: "CREATE" | "JOIN" | null;

  constructor() {
    this.gameType = null;
    this.action = null;
  }

  notNull(){
    return this.gameType && this.action
  }

  set(gameType: GameType, action: "CREATE" | "JOIN"){
    this.gameType = gameType;
    this.action = action;
  }

  reset(){
    this.gameType = null;
    this.action = null;
  }
}
