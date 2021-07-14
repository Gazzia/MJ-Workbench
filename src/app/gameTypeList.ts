import {faDiceD20, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import {GameType} from "./shared/models/GameType";

export const gameTypeList: GameType[] = [
  new GameType(
    "guerredusale",
    "guerredusale",
    "Guerre du Sale",
    faSkullCrossbones,
    ["startingHealth"]
  ),
  new GameType(
    "aventuredusale",
    "aventuredusale",
    "Aventure du Sale",
    faDiceD20,
    []
  ),
]
