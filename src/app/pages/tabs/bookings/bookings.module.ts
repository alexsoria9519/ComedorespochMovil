import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsPageRoutingModule } from './bookings-routing.module';

import { BookingsPage } from './bookings.page';
import { ComponentsModule } from '../../../components/components.module';
import { TicketsModule } from 'src/app/components/tickets/tickets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsPageRoutingModule,
    ComponentsModule,
    TicketsModule
  ],
  declarations: [BookingsPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class BookingsPageModule {}
