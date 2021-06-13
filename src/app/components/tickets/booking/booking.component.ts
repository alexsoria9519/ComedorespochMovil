import { Component, Input, OnInit } from "@angular/core";
import { Venta } from "../../../config/clases";
import { VentasService } from "../../../services/ventas.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
})
export class BookingComponent implements OnInit {
  @Input() idVenta: number = 0;
  @Input() titulo: string = "Datos del Ticket";

  venta: Venta = {
    intidventa: 0,
    dtfecha: '',
    intcantidad: 0,
    blnestado: false,
    blnreserva: false,
  };

  constructor(private ventaService: VentasService) {}

  ngOnInit() {}

  async loadDataVenta() {
    try {
      let respuesta: any = await this.ventaService.getDatosVenta(this.idVenta);
      console.log("Respuesta ", respuesta);

      if (respuesta?.success === "ok") {
        let dataVenta = JSON.parse(respuesta?.dataVenta);
        this.venta.intidventa = dataVenta?.intidventa;
        this.venta.intcantidad = dataVenta?.intcantidad;
        this.venta.dtfecha = dataVenta?.dtfecha;
        this.venta.blnreserva = dataVenta?.blnreserva;
        this.venta.blnestado = dataVenta?.blnestado;
        this.venta.intidcostousuario = dataVenta?.intidcostousuario;
      }

      console.log("Respuesta ", this.venta);
    } catch (e) {}
  }

  convertToValidDate(fecha: string) {
    let fechaArr = fecha.split("[UTC]");
    let date = new Date(fechaArr[0]);
    return `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
}
