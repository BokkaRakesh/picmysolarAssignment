import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { SideNavItem } from "../../components/side-nav-item/side-nav-item.model";
import { SideNavItemsService } from "src/app/core/services/side-nav-items.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild("sidenav") sidenav: ElementRef;

  userName: any;
  sideNavWidth = 4;
  showSetting = false;
  devicewidth = null;

  customCollapsedHeight: string = "50px";
  customExpandedHeight: string = "50px";

  navItems: SideNavItem[];
  navStatus = true;
  panelOpenState = false;

  showNotification: false;
  constructor(
    private _sideNavItemsService: SideNavItemsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log("DashboardComponent -> ngOnInit -> params", params);
      this.userName = params.userName;
    });
    this.navItems = this._sideNavItemsService.getNavItems();
    this.devicewidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (this.devicewidth <= 450) {
      this.navStatus = false;
      this.sideNavWidth = 250;
    } else {
      this.sideNavWidth = 48;
    }
    console.log(this.devicewidth);
  }

  ngOnDestroy() {}

  increase() {
    this.sideNavWidth = 250;
    this.showSetting = true;
    console.log("increase sidenav width");
  }
  decrease() {
    if (this.devicewidth <= 450) {
      // this.sideNavWidth = 0;
    } else {
      this.sideNavWidth = 48;
    }

    this.showSetting = false;
    // this.sideNavWidth = 4;
    // console.log('decrease sidenav width');
  }

  logout() {
    this.router.navigate(["home"]);
  }
  notificationShow() {}
  notificationHide() {
    console.log("Notification Side Nav is Closed");
  }
}
