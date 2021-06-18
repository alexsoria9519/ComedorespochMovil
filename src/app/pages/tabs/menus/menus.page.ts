import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Menu } from "../../../config/clases";

@Component({
  selector: "app-menus",
  templateUrl: "./menus.page.html",
  styleUrls: ["./menus.page.scss"],
})
export class MenusPage implements OnInit {
  tieneInternet = navigator.onLine;
  constructor(private nav: NavController) {}

  ngOnInit() {}

  goToMenuVisor(menu: Menu) {
    this.nav.navigateForward("/tabs/menus/menu-visor", {
      animated: true,
      queryParams: {
        idMenu: menu.intidmenu,
      },
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
