import {GenericGame} from "../../../shared/models/GenericGame";

// GUERRE DU SALE

export class GuerreDuSale_Game extends GenericGame {

  startingHealth = 20;

  constructor(args:any) {
    super(args.name, "guerredusale");
    this.startingHealth = args.startingHealth ?? 20;
  }
}
