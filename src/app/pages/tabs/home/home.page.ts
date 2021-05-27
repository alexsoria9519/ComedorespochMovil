import { Component, OnInit } from '@angular/core';
import { planificacionesMenu } from '../../../config/clases';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  dataMenus: planificacionesMenu = {
    cantidad: 0,
    planificacionesMenu: [],
  };
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadMenusFechaActual();
  }

  async loadMenusFechaActual() {
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

}
