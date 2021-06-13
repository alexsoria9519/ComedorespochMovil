import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { DataBookingsComponent } from './data-bookings/data-bookings.component';
import { TicketsComponent } from './tickets/tickets.component';
import { IonicModule } from '@ionic/angular';
import { TicketComponent } from './ticket/ticket.component';
import { ModalTicketComponent } from '../modals/modal-ticket/modal-ticket.component';



@NgModule({
  declarations: [
    BookingComponent,
    DataBookingsComponent,
    TicketsComponent,
    TicketComponent,
    ModalTicketComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    BookingComponent,
    DataBookingsComponent,
    TicketsComponent,
    TicketComponent,
    ModalTicketComponent
  ],
  entryComponents: [
    ModalTicketComponent
  ]
  
})
export class TicketsModule { }
