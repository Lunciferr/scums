import { IonicModule, IonSearchbar } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {
  // search(event) {
  //   const text = event.target.value;
  //   const allProducts = this.productService.getProducts();
   
  //   if (text && text.trim() !== '') {
  //   this.products = allProducts.filter(
  //   item => item.name.toLowerCase().includes(text.toLowerCase()));
  //   } else {
  //   // Blank text, clear the search, show all products
  //   this.products = allProducts;
  //   }
  //   }

  // refresh(event) {
  //   this.searchBar.value = '';
  //   event.target.complete();
  //   }

  @ViewChild('searchBar', {static: false}) searchBar: IonSearchbar;

}
