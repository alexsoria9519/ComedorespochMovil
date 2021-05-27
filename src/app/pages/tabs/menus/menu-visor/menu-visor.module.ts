import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MenuVisorPageRoutingModule } from "./menu-visor-routing.module";

import { MenuVisorPage } from "./menu-visor.page";
import { ComponentsModule } from "../../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuVisorPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MenuVisorPage],
})
export class MenuVisorPageModule {}
