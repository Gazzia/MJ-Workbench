import {GenericGame} from "./GenericGame";

export class GenericPlayer {
  id: any;
  name: string;
  game: GenericGame | undefined;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
