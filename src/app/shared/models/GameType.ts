import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export class GameType{

  id: string
  route: string
  name: string
  icon: IconDefinition | null

  constructor(id: string, route: string, name: string, icon?: IconDefinition) {
    this.id = id;
    this.route = route;
    this.name = name;
    this.icon = icon || null;
  }
}
