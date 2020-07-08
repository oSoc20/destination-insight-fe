import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Data } from '../models/data';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  headers = ["ID", "Origin", "Destination", "OriginDate", "OriginTime", "DestinationDate", "DestinationTime"];
  
  data: Data[];

   constructor(private ds: DataService) {}

   ngOnInit(): void {
        this.getAllData();
   }

   getAllData(){  
    this.ds.getAllData().subscribe(data => { this.data = data; }, error => { console.error(error); });
   }
}
