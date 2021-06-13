import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { VentasService } from "../../../services/ventas.service";
import { Venta } from "../../../config/clases";

@Component({
  selector: "app-modal-ticket",
  templateUrl: "./modal-ticket.component.html",
  styleUrls: ["./modal-ticket.component.scss"],
})
export class ModalTicketComponent implements OnInit {
  @Input() venta: Venta;
  qr: string = "";
  constructor(
    private modalCtrl: ModalController,
    private ventasService: VentasService
  ) {}

  ngOnInit() {
    this.loadQRVenta(this.venta?.intidventa);
  }

  onCerrarModal() {
    this.modalCtrl.dismiss();
  }

  async loadQRVenta(idVenta: number) {
    try{
      let respuesta: any = await this.ventasService.getQRVenta(idVenta);
      console.log("Respuesta QR ", respuesta);
      if (respuesta?.success === "ok") {
        this.qr = respuesta?.qrImage;
      }
    }catch(e){
      console.error('Error ', e);
    }
  }
}
