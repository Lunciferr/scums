import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmemberpagePage } from './addmemberpage.page';

const routes: Routes = [
  {
    path: '',
    component: AddmemberpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmemberpagePageRoutingModule {}
