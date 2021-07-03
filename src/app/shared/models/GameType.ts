import {IconProp} from "@fortawesome/fontawesome-svg-core";

export class GameType{

  id: string
  route: string
  name: string
  icon: IconProp;

  constructor(id: string, route: string, name: string, icon: IconProp) {
    this.id = id;
    this.route = route;
    this.name = name;
    this.icon = icon;
  }
}
