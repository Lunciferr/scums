import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuicklinksPageRoutingModule } from './quicklinks-routing.module';

import { QuicklinksPage } from './quicklinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuicklinksPageRoutingModule
  ],
  declarations: [QuicklinksPage]
})
export class QuicklinksPageModule {}
