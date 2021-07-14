import { Injectable } from '@angular/core';
import {GuerreDuSale_Game} from "../../guerredusale/shared/models/GuerreDuSale_Game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  create(args: any) {
    switch (args.gameType.id) {
      case "guerredusale":
        // @ts-ignore
        return new GuerreDuSale_Game(args);
      default:
        return null
    }
  }
}
