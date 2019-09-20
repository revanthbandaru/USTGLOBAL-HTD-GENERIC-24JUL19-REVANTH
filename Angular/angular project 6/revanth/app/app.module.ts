import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import{ FormsModule} from '@angular/forms';
import { FirebaseComponent } from './firebase/firebase.component';
import { UsersComponent } from './users/users.component';
import { PipePipe } from './pipe.pipe';
import { FilterPipe } from './filter.pipe';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    MoviesComponent,
    FirebaseComponent,
    UsersComponent,
    PipePipe,
    FilterPipe,
    EntertainmentComponent,
    SportsComponent,
    GeneralComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'',component:HomeComponent},
      { path:'news',component:NewsComponent},
      { path: 'movies',component:MoviesComponent },
      { path: 'firebase',component:FirebaseComponent },
      { path: 'users',component:UsersComponent }

    ]),

    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
