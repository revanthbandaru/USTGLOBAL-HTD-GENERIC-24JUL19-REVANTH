import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ResipyDetailsComponent } from './resipy-details/resipy-details.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { HeaderComponent } from './header/header.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


@NgModule({
  declarations: [
    AppComponent,
   
    CarsComponent,
    CarDetailsComponent,
    RecipiesComponent,
    ResipyDetailsComponent,
    MobilesComponent,
    MobileDetailsComponent,
    NewsComponent,
    NewsDetailsComponent,
    HeaderComponent,
    SportsComponent,
    BusinessComponent,
    HealthComponent,
    GeneralComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path : '',component : CarsComponent},
      {path : 'recipies',component : RecipiesComponent},
      {path : 'mobiles',component : MobilesComponent},
      {path : 'news',component : NewsComponent},
      {path : 'sports',component : SportsComponent},
      {path : 'business',component : BusinessComponent},
      {path : 'health',component : HealthComponent},
      {path : 'general',component : GeneralComponent},
      {path : 'entertainment',component : EntertainmentComponent},
     ]),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
