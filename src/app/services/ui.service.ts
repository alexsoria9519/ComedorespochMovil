import { Injectable } from "@angular/core";
import {
  AlertController,
  LoadingController,
  ToastController,
} from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class UiService {
  constructor(
    private alertCtrl: AlertController,
    public loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async alertaInformativa(message: string) {
    const alert = await this.alertCtrl.create({
      message,
      buttons: ["OK"],
    });

    await alert.present();
  }

  async tinyAlert(message: string, duration: number, positions) {
    const toast = await this.toastController.create({
      message,
      duration,
      animated: true,
      position: positions,
      cssClass: "text-center",
    });
    toast.present();
  }

  async tinyAlertColor(
    message: string,
    duration: number,
    positions,
    color: string
  ) {
    const toast = await this.toastController.create({
      message,
      duration,
      animated: true,
      position: positions,
      cssClass: "text-center",
      color,
    });
    toast.present();
  }

  async abrirLoading(message: string) {
    const loading = await this.loadingController.create({
      message,
      translucent: true,
    });
    return await loading.present();
  }

  async cerrarLoading() {
    return await this.loadingController
      .dismiss()
      .then(() => {})
      .catch((e) => console.log("error loading", e));
  }
}
