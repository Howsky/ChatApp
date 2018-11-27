export class NavLink {
  url: string;
  label: string;
  icon: string;

  constructor(url: string, label: string, icon: string) {
    this.url = url;
    this.label = label;
    this.icon = icon;
  }
}
