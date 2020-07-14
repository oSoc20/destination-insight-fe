import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Data } from '../models/data';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  headers = ["origin","destination","search_for_arrival","date_travel","time_travel"];
  
  public data: Data[];

   constructor(private ds: DataService) {}

   ngOnInit(): void {
        this.getAllData();
   }

   getAllData(){  
    this.ds.getAllData().subscribe(data => { this.data = data; console.log(data)}, error => { console.error(error); });
   }
}
