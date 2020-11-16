import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenusPageRoutingModule } from './menus-routing.module';

import { MenusPage } from './menus.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenusPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenusPage]
})
export class MenusPageModule {}
