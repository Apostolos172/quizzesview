import { MenuItem } from 'primeng/api/menuitem';

export class AppMenuItem implements MenuItem {
  label: string = 'Menu item';
  tooltip: string = 'Menu item';
  expanded: boolean = true;
  visible: boolean = true;
  // url?: string;
  routerLink?: string;
  target: string = '_self';
  routerLinkActiveOptions: any = { exact: true };

  items: MenuItem[] = [];

  constructor(label: string) {
    this.label = label;
    this.tooltip = this.label;
  }
}
