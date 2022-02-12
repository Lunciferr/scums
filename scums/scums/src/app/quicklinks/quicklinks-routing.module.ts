import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuicklinksPage } from './quicklinks.page';

const routes: Routes = [
  {
    path: '',
    component: QuicklinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuicklinksPageRoutingModule {}
