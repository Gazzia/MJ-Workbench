import {faDiceD20, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import {GameType} from "./shared/models/GameType";

export const gameTypeList: GameType[] = [
  {
    id: "guerredusale",
    route: "guerredusale",
    name: "Guerre du Sale",
    icon: faSkullCrossbones
  },
  {
    id: "royaumedusale",
    route: "royaumedusale",
    name: "Royaume du Sale",
    icon: faDiceD20
  }
]
