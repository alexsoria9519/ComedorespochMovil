import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalTicketComponent } from "../../../components/modals/modal-ticket/modal-ticket.component";
import { Venta } from "../../../config/clases";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"],
})
export class BookingsPage implements OnInit {
  tieneInternet = navigator.onLine;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async ventaSeleccionada(venta: Venta) {
    const modal = await this.modalCtrl.create({
      component: ModalTicketComponent,
      componentProps: {
        venta,
      },
      showBackdrop: true,
      // cssClass: 'modal-transparente'
    });

    modal.present();
    console.log("Venta Seleccionada ", venta);
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
