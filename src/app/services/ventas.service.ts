import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

const URL = environment.url;
const REST = environment.rest;

@Injectable({
  providedIn: "root",
})
export class VentasService {
  constructor(private http: HttpClient) {}

  dataVentasUsuario(cedula: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${URL}${REST}/comedor/ventas/usuario?cedula=${cedula}`)
        .subscribe((resp) => {
          resolve(resp);
        });
    });
  }

  reservaUsuario(cedula: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${URL}${REST}/comedor/venta/reservas/${cedula}`)
        .subscribe((resp) => {
          console.log("Resp ", resp);
          resolve(resp);
        });
    });
  }

  getDatosVenta(idVenta: number) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${URL}${REST}/comedor/venta/find/${idVenta}`)
        .subscribe((resp) => {
          resolve(resp);
        });
    });
  }

  getQRVenta(idVenta: number) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${URL}${REST}/comedor/venta/find/getQR/${idVenta}`)
        .subscribe((resp) => {
          resolve(resp);
        });
    });
  }

  getCostosUsuario(cedula: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${URL}${REST}/comedor/costousuario/costos/${cedula}`)
        .subscribe((resp) => {
          resolve(resp);
        });
    });
  }

  insertVenta(data: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(`${URL}${REST}/comedor/venta/ingreso`, data)
        .subscribe((resp) => {
          console.log("Resp ", resp);
          resolve(resp);
        });
    });
  }

  dataVentaUsuarioFecha(cedula: string, fecha: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${URL}${REST}/comedor/ventas/usuario/fecha?cedula=${cedula}&fecha=${fecha}`)
        .subscribe((resp) => {
          resolve(resp);
        });
    });
  }
}
