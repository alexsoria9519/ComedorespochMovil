import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { VentasService } from "../../../services/ventas.service";
import { reporteVentas, Venta, Ventas } from "../../../config/clases";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.scss"],
})
export class TicketsComponent implements OnInit {
  @Input() cedula = "1721796066";
  @Input() identificador = "compras";
  @Output() compraEmit = new EventEmitter<Venta>();
  ventasHoy: Ventas = {
    ventas: [],
    cantidad: 0,
  };
  datosVentas: reporteVentas = {
    ventas: [],
    totalVentas: 0,
    cantidadVentas: 0,
  };

  constructor(private ventasService: VentasService) {}

  ngOnInit() {
    console.log("identificador", this.identificador);
    if(this.identificador === "compras"){
      this.loadDatosVentasUsuario();
    }else{
      this.loadDatosVentasUsuarioFecha();
    }
    
  }

  async loadDatosVentasUsuario() {
    try {
      let respuesta: any = await this.ventasService.dataVentasUsuario(
        this.cedula
      );
      if (respuesta?.success === "ok") {
        this.datosVentas.ventas = JSON.parse(respuesta?.ventasDiarias);
        this.datosVentas.cantidadVentas = respuesta?.cantidadVentas;
        this.datosVentas.totalVentas = respuesta?.totalVentas;
      }
    } catch (e) {}
  }

  async loadDatosVentasUsuarioFecha() {
    try {
      let fechaHoy = new Date();
      console.log('Fecha ', `${fechaHoy.getFullYear()}-${
          fechaHoy.getMonth() + 1
        }-${fechaHoy.getDate()}`);

      let respuesta: any = await this.ventasService.dataVentaUsuarioFecha(
        this.cedula,
        `${fechaHoy.getFullYear()}-${
          fechaHoy.getMonth() + 1
        }-${fechaHoy.getDate()}`
      );

      console.log("Respuesta Compras Hoy ", respuesta);

      if (respuesta?.success === "ok") {
        this.ventasHoy.ventas = JSON.parse(respuesta.ventas);
        this.ventasHoy.cantidad = respuesta.cantidad;
      }
      console.log("Respuesta Compras Hoy Almacenada", this.ventasHoy);

    } catch (e) {}
  }

  emitirDatos(compra: Venta) {
    console.log("Emitir");
    this.compraEmit.emit(compra);
  }
}
