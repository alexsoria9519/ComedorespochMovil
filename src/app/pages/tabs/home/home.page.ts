import { Component, OnInit } from "@angular/core";
import { VentasService } from "../../../services/ventas.service";
import {
  dataVentas,
  planificacionesMenu,
  Ventas,
} from "../../../config/clases";
import { MenuService } from "../../../services/menu.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  dataMenus: planificacionesMenu = {
    cantidad: 0,
    planificacionesMenu: [],
  };

  tickets: dataVentas = {
    ventasDiarias: [],
    totalVentas: 0.0,
    cantidadVentas: 0.0,
  };

  reservas: Ventas = {
    ventas: [],
    cantidad: 0,
  };

  constructor(
    private menuService: MenuService,
    private ventasService: VentasService
  ) {}

  ngOnInit() {
    this.loadMenusFechaActual();
    this.loadDataTickets();
    this.loadDataReservas();
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

  async loadDataTickets() {
    try {
      let respuesta: any = await this.ventasService.dataVentasUsuario(
        "1721796066"
      );

      if (respuesta?.success === "ok") {
        this.tickets.ventasDiarias = JSON.parse(respuesta?.ventasDiarias);
        this.tickets.totalVentas = respuesta?.totalVentas;
        this.tickets.cantidadVentas = respuesta?.cantidadVentas;
      }
      console.log("Respuesta ", this.tickets);
    } catch (e) {
      console.error("Error ", e);
    }
  }

  async loadDataReservas() {
    try {
      let respuesta: any = await this.ventasService.reservaUsuario(
        "1721796066"
      );

      if (respuesta?.success === "ok") {
        this.reservas.cantidad = respuesta?.cantidad;
        this.reservas.ventas = JSON.parse(respuesta?.ventas);
      }
      console.log("Respuesta ", this.tickets);
    } catch (e) {
      console.error("Error ", e);
    }
  }
}
