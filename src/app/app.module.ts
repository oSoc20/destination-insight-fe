import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { UploadComponent } from './upload/upload.component';
import { DataService } from './service/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphOrigDestComponent} from './graph-orig-dest/graph-orig-dest.component';
import { TablePairsComponent } from './table-pairs/table-pairs.component';
import { AmountOfSearchesComponent } from './amount-of-searches/amount-of-searches.component';
import { SearchesByHourComponent } from './searches-by-hour/searches-by-hour.component';
import { AuthGuard } from './service/auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';

// define the routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'graph', component:  GraphOrigDestComponent, canActivate: [AuthGuard]},
  { path: 'list', component: DataListComponent, canActivate: [AuthGuard] },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: 'table-pairs', component: TablePairsComponent, canActivate: [AuthGuard] },
  { path: 'number-searches', component: AmountOfSearchesComponent, canActivate: [AuthGuard] },
  { path: 'srchHours', component: SearchesByHourComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    FileUploadModule,
    NgxSpinnerModule
  ],
  declarations: [AppComponent,
    DataListComponent, UploadComponent, DashboardComponent, TablePairsComponent, AmountOfSearchesComponent, SearchesByHourComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
