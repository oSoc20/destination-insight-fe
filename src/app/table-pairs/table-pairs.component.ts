import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { OrigDestPairs } from '../models/origDestPairs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-table-pairs',
  templateUrl: './table-pairs.component.html',
  styleUrls: ['./table-pairs.component.css']
})
export class TablePairsComponent implements OnInit {

  //headers = ["Origin-Destination","Counts"];
  startDate = "2000-01-01";
  endDate = "2050-01-01";
  
  public data: OrigDestPairs[];

   constructor(private ds: DataService) {}

   ngOnInit(): void {
        this.getAllData();
   }

   getAllData(){  
    this.ds.getOrigDestPairsData().subscribe(data => { this.data = data; console.log(data)}, error => { console.error(error); });
   }

}
