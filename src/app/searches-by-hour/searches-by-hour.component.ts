import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import * as Chart from 'chart.js';
import { DataService } from '../service/data.service';
import { SearchByTime } from '../models/srchByTime';
import { SearchByHour } from '../models/srchByHour';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searches-by-hour',
  templateUrl: './searches-by-hour.component.html',
  styleUrls: ['./searches-by-hour.component.css']
})
export class SearchesByHourComponent implements OnInit {

  startDate = "2000-01-01";
  endDate = "2050-01-01";

  public loadingSearchesByHour = false;
  
  canvasByHour: any;
  ctxByHour: any;


  public dataByHour: SearchByHour[];

  public labelsByHour: string[] = [];
  public datasetByHour: number[] = [];


  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.getByTimeData();
  }


  getByTimeData() {
    this.loadingSearchesByHour = true;
    //receive data
    this.ds.getSearchesByHour().subscribe(data => {
      this.dataByHour = data; console.log(data)
      this.dataByHour.forEach(data => this.labelsByHour.push(data.Day_Hour));
      this.dataByHour.forEach(data => this.datasetByHour.push(data.Counts));
      this.generateByTimeChart();
      this.loadingSearchesByHour = false;
    }, error => { console.error(error); });


  }

  generateByTimeChart() {
    this.canvasByHour = document.getElementById('ByTimeChart');
    this.ctxByHour = this.canvasByHour.getContext('2d');
    let myChart = new Chart(this.ctxByHour, {
      type: 'radar',
      data: {
        labels: this.labelsByHour,
        datasets: [{
          label: 'Number of searches by hour',
          data: this.datasetByHour,
          borderColor: ["#006ab3"],
          backgroundColor: ["#dadbd9"],
          borderWidth: 1
        }]
      },
      options: {}
    })
  }
}