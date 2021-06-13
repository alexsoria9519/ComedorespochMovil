
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './generals/header/header.component';
import { DataMenuComponent } from './menus/data-menu/data-menu.component';
import { DataMenusComponent } from './menus/data-menus/data-menus.component';

@NgModule({
    declarations: [
        HeaderComponent,
        DataMenuComponent,
        DataMenusComponent
    ],
    imports: [
        CommonModule,
        IonicModule, 
    ],
    providers: [],
    exports: [
        HeaderComponent,
        DataMenusComponent,
        DataMenuComponent,        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
  })

  export class ComponentsModule { }