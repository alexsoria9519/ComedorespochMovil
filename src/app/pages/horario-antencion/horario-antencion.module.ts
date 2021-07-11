import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioAntencionPageRoutingModule } from './horario-antencion-routing.module';

import { HorarioAntencionPage } from './horario-antencion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioAntencionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HorarioAntencionPage]
})
export class HorarioAntencionPageModule {}
