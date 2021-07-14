import {IconProp} from "@fortawesome/fontawesome-svg-core";

export class GameType{
  id: string
  route: string
  name: string
  icon: IconProp
  creationProps: String[]

  constructor(id: string, route: string, name: string, icon: IconProp, creationProps: String[]) {
    this.id = id;
    this.route = route;
    this.name = name;
    this.icon = icon;
    this.creationProps = creationProps;
  }
}
