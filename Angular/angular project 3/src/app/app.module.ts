import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HeaderComponent } from './header/header.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikedetailsComponent } from './bikedetails/bikedetails.component';
import { HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HeaderComponent,
    BikesComponent,
    BikedetailsComponent,HomeComponent

  ],
  imports: [
    BrowserModule,ReactiveFormsModule,RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'bikes',component:BikesComponent},
      {path:'bikedetails',component:BikedetailsComponent}
    ]),HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
