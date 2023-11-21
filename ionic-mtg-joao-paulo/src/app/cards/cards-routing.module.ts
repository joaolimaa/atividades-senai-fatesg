import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CardsListComponent
  },
  {
    path: 'detail/:id',
    component: CardsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
