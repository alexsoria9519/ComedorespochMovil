import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const URL = environment.url;
const REST = environment.rest;

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
  ) { }


  menusFechaActual(){
    return new Promise((resolve, reject) => {
      this.http.get(`${URL}${REST}/comedor/planificacionmenus/fechaactual`).subscribe( (resp) => {
        resolve(resp);
      });
    });
  }

  // tipoUsuarios(){
  //   return new Promise((resolve, reject) => {
  //     console.log('Path ', `${URL}${REST}/comedor/tipousuario/todos`);
  //     // this.http.get(`${URL}${REST}/comedor/planificacionmenus/fechaactual`).subscribe( (resp) => {
  //     this.http.get(`${URL}${REST}/comedor/tipousuario/todos`).subscribe( (resp) => {
  //       resolve(resp);
  //     });
  //   });
  // }

  getMenu(idMenu: number){
    return new Promise((resolve, reject) => {
      this.http.get(`${URL}${REST}/comedor/menus/getmenu?idMenu=${idMenu}`).subscribe( (resp) => {
        resolve(resp);
      });
    });
  }

}
