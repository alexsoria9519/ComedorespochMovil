import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioAntencionPage } from './horario-antencion.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioAntencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioAntencionPageRoutingModule {}
