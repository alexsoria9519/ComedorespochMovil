
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './generals/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    
    imports: [
        CommonModule,
        IonicModule, 
    ],
    providers: [],
    exports: [
        HeaderComponent
    ]
  })

  export class ComponentsModule { }