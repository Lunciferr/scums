import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmemberpagePageRoutingModule } from './addmemberpage-routing.module';

import { AddmemberpagePage } from './addmemberpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddmemberpagePageRoutingModule
  ],
  declarations: [AddmemberpagePage]
})
export class AddmemberpagePageModule {}
