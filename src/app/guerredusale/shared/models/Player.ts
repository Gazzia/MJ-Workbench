import {Game} from "./Game";

export class Player {
  id: any;
  name: string;
  health: number;
  game: Game | undefined;
  constructor(id: string, name: string, startingHealth: number) {
    this.id = id;
    this.name = name;
    this.health = startingHealth;
  }
}
