import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Menu, planificacionesMenu } from "src/app/config/clases";
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-data-menus",
  templateUrl: "./data-menus.component.html",
  styleUrls: ["./data-menus.component.scss"],
})
export class DataMenusComponent implements OnInit {
  @Output() menuEmit = new EventEmitter<Menu>();
  dataMenus: planificacionesMenu = {
    cantidad: 0,
    planificacionesMenu: [],
  };
  constructor(private menuService: MenuService) {}

  async ngOnInit() {
    this.loadMenuFechaActual();
  }

  async loadMenuFechaActual() {
    try {
      let respuesta: any = await this.menuService.menusFechaActual();
      if (respuesta?.success === "ok") {
        this.dataMenus.cantidad = respuesta?.cantidad;
        this.dataMenus.planificacionesMenu = JSON.parse(
          respuesta?.planificacionesMenu
        );
      }
    } catch (e) {
      console.error("Error ", e);
    }
  }

  convertToString(fecha: string) {
    let fechaArr = fecha.split("[UTC]");
    let date = new Date(fechaArr[0]);
    return `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  emitirDatosMenu(menu: Menu){
    this.menuEmit.emit(menu);
  }

}
