import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// define the routes
const appRoutes: Routes = [
  //{ path: '', component: DataListComponent },
  { path: 'data', component: DataListComponent, }
];

@NgModule({
  imports:      [ BrowserModule, 
                  HttpClientModule,
                  ReactiveFormsModule, 
                  NgbModule,
                  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, 
                  DataListComponent],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
