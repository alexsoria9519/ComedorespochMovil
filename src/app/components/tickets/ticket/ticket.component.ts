import { Component, Input, OnInit } from "@angular/core";
import { Venta } from "../../../config/clases";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent implements OnInit {
  @Input() venta: Venta;
  constructor() {}

  ngOnInit() {}


  convertToString(fecha: string) {
    let fechaArr = fecha.split("[UTC]");
    let date = new Date(fechaArr[0]);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
}
