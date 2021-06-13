import { Component, Input, OnInit } from '@angular/core';
import { VentasService } from '../../../services/ventas.service';
import { reporteVentas } from '../../../config/clases';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  @Input() cedula = "1721796066";
  datosVentas: reporteVentas = {
    ventas: [],
    totalVentas: 0,
    cantidadVentas: 0
  }

  constructor(private ventasService: VentasService) { }

  ngOnInit() {
    this.loadDatosVentasUsuario();
  }

  async loadDatosVentasUsuario() {
    try {
      let respuesta: any = await this.ventasService.dataVentasUsuario(this.cedula);
      if (respuesta?.success === "ok") {
        this.datosVentas.ventas = JSON.parse(respuesta?.ventasDiarias);
        this.datosVentas.cantidadVentas = respuesta?.cantidadVentas;
        this.datosVentas.totalVentas = respuesta?.totalVentas;
      }
    } catch (e) {}
  }

}
