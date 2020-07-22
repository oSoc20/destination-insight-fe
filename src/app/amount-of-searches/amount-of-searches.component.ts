import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import * as Chart from 'chart.js';
import { DataService } from '../service/data.service';
import { SearchByTime } from '../models/srchByTime';
import { SearchByHour } from '../models/srchByHour';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-amount-of-searches',
  templateUrl: './amount-of-searches.component.html',
  styleUrls: ['./amount-of-searches.component.css']
})
export class AmountOfSearchesComponent implements OnInit {

  public loadingSearchesByTime = false;
  
  canvasByTime: any;
  ctxByTime: any;


  public dataByTime: SearchByTime[];

  public labelsByTime: string[] = [];
  public datasetByTime: number[] = [];


  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.getByTimeData();
  }


  getByTimeData() {
    this.loadingSearchesByTime = true;
    //receive data
    this.ds.getSearchesByTime().subscribe(data => {
      this.dataByTime = data; console.log(data)
      this.dataByTime.forEach(data => this.labelsByTime.push(data.Time));
      this.dataByTime.forEach(data => this.datasetByTime.push(data.Counts));
      this.generateByTimeChart();
      this.loadingSearchesByTime = false;
    }, error => { console.error(error); });


  }

  generateByTimeChart() {
    this.canvasByTime = document.getElementById('ByTimeChart');
    this.ctxByTime = this.canvasByTime.getContext('2d');
    let myChart = new Chart(this.ctxByTime, {
      type: 'line',
      data: {
        labels: this.labelsByTime,
        datasets: [{
          label: 'Most searched for destination',
          data: this.datasetByTime,
          borderColor: ["#006ab3"],
          backgroundColor: ["#dadbd9"],
          borderWidth: 1
        }]
      },
      options: {}
    })
  }
}
