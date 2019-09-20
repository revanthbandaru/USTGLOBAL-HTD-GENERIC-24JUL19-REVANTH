import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfSwitchComponent } from './if-switch/if-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikedetailsComponent } from './bikedetails/bikedetails.component';
import { ReducePipe } from './reduce.pipe';
import { FilterPipe } from './filter.pipe';
// import {ThorComponent} from './thor.component';

@NgModule({
  declarations: [
    AppComponent,SampleComponent, HeaderComponent, DataBindingComponent, TwoWayComponent, DirectivesComponent, IfSwitchComponent, AttributeDirectivesComponent, MyDirectiveDirective, ParentComponent, ChildComponent, Parent1Component, Child1Component, BikesComponent, BikedetailsComponent, ReducePipe, FilterPipe,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
