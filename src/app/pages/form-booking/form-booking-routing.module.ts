import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormBookingPage } from './form-booking.page';

const routes: Routes = [
  {
    path: '',
    component: FormBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBookingPageRoutingModule {}
