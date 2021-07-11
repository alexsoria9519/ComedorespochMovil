import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-antencion',
  templateUrl: './horario-antencion.page.html',
  styleUrls: ['./horario-antencion.page.scss'],
})
export class HorarioAntencionPage implements OnInit {

  tieneInternet = navigator.onLine;
  constructor() { }

  ngOnInit() {
  }

}
