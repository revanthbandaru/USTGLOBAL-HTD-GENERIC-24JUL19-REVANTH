import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { CarsComponent} from './cars/cars.component';
import { SecondComponent } from './second/second.component';
import {CarComponent} from './car/car.component';
import {CarDetailsComponent} from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,CarsComponent, SecondComponent,CarComponent,CarDetailsComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path : '', component: NewsComponent},
      {path : 'cars', component: CarsComponent},
      {path :'second',component:SecondComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
