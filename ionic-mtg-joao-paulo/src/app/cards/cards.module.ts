import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPageRoutingModule
  ],
  declarations: [
    CardsListComponent,
    CardsDetailComponent
  ]
})
export class CardsPageModule {}
