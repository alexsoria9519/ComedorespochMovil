import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormBookingPageRoutingModule } from './form-booking-routing.module';

import { FormBookingPage } from './form-booking.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormBookingPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [FormBookingPage]
})
export class FormBookingPageModule {}
