import {GenericPlayer} from "../../../shared/models/GenericPlayer";

export class GuerreDuSale_Player extends GenericPlayer{
  health: number;
  constructor(id: string, name: string, startingHealth: number) {
    super(id, name);
    this.health = startingHealth;
  }
}
