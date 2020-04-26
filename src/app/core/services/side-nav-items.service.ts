import { SideNavItem } from './../../modules/dashboard/components/side-nav-item/side-nav-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideNavItemsService {
  sideNavItems: SideNavItem[];
  constructor() {
    // Basing on access level we filter here
    this.sideNavItems = [

    ];
  }

  getNavItems(): SideNavItem[] {
    return this.sideNavItems;
  }
}
