import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterEventsPageRoutingModule } from './filter-events-routing.module';

import { FilterEventsPage } from './filter-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterEventsPageRoutingModule
  ],
  declarations: [FilterEventsPage]
})
export class FilterEventsPageModule {}
