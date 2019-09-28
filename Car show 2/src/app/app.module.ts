import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CardetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path :'car',component :CarsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
