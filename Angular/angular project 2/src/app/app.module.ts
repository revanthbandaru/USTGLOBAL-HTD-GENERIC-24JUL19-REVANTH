import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { FooterComponent } from './footer/footer.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent,
    RegisterComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    FooterComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      { path : '',component: HomeComponent},
      { path : 'register',component : RegisterComponent},
      { path : 'about',component : AboutComponent,children :[
        {path : 'child1',component : Child1Component},
        {path : 'child2',component : Child2Component},
        {path : 'child3',component : Child3Component}
      ]},
      { path : 'observables', component :ObservablesComponent},
      { path : 'login',component : LoginComponent},
      { path : '**',component : PageNotFoundComponent} 
    ]),FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
