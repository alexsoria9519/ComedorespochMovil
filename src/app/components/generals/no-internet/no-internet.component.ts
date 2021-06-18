import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-no-internet",
  templateUrl: "./no-internet.component.html",
  styleUrls: ["./no-internet.component.scss"],
})
export class NoInternetComponent implements OnInit {
  tieneInternet = navigator.onLine;

  constructor() {}

  ngOnInit() {}

  recargarPagina() {
    location.reload();
  }
}
