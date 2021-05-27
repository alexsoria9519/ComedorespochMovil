import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuVisorPage } from './menu-visor.page';

const routes: Routes = [
  {
    path: '',
    component: MenuVisorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuVisorPageRoutingModule {}
