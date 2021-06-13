import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NavController } from "@ionic/angular";
import { reporteVentas, Venta, Ventas } from "../../../config/clases";
import { VentasService } from "../../../services/ventas.service";

@Component({
  selector: "app-data-bookings",
  templateUrl: "./data-bookings.component.html",
  styleUrls: ["./data-bookings.component.scss"],
})
export class DataBookingsComponent implements OnInit {
  @Input() cedula = "1721796066";
  @Output() reservaEmit = new EventEmitter<Venta>();
  ventas: Ventas = {
    ventas: [],
    cantidad: 0,
  };

  datosVentas: reporteVentas = {
    ventas: [],
    totalVentas: 0,
    cantidadVentas: 0,
  };

  constructor(
    private ventasService: VentasService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.loadDataReservas();
  }

  async loadDataReservas() {
    try {
      let respuesta: any = await this.ventasService.reservaUsuario(this.cedula);

      if (respuesta?.success === "ok") {
        this.datosVentas.ventas = JSON.parse(respuesta?.ventas);
        this.datosVentas.cantidadVentas = respuesta?.cantidad;
      }

      console.log("Response Data ", this.datosVentas);
    } catch (e) {}
  }

  convertToString(fecha: string) {
    let fechaArr = fecha.split("[UTC]");
    let date = new Date(fechaArr[0]);
    return `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  emitirDatos(reserva: Venta) {
    this.reservaEmit.emit(reserva);
  }

  onCrearReserva() {
    this.nav.navigateForward(`/tabs/bookings/create`, { animated: true });
  }
}
