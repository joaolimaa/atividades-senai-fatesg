import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsPageModule } from './cards/cards.module';
import { SetsPageModule } from './sets/sets.module';
import { FormatsPageModule } from './formats/formats.module';
import { TypesPageModule } from './types/types.module';
import { SubTypesPageModule } from './sub-types/sub-types.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CardsPageModule,
    SetsPageModule,
    FormatsPageModule,
    TypesPageModule,
    SubTypesPageModule
  ],
  providers: [
    {
     provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
