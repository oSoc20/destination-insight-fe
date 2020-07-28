import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import * as Chart from 'chart.js';
import { DataService } from '../service/data.service';
import { SearchByTime } from '../models/srchByTime';
import { SearchByHour } from '../models/srchByHour';
import { Count } from '../models/count';
import { FormControl } from '@angular/forms';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-searches-by-hour',
  templateUrl: './searches-by-hour.component.html',
  styleUrls: ['./searches-by-hour.component.css']
})
export class SearchesByHourComponent implements OnInit {

  public loadingSearchesByHour = false;
  
  canvasByHour: any;
  ctxByHour: any;

  public dataByHour: Array<Array<Count>>;

  public labelsHours: string[] = [];
  public datasetCounts = [];


  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.getByTimeData();
  }


  getByTimeData() {
    this.loadingSearchesByHour = true;
    //receive data
    this.ds.getSearchesByHour().subscribe(data => 
    {
      console.log(data);
      for (const [key, value] of Object.entries(data)) {
        console.log(key);
        var temp: number[] = [];
        value.map((item) => {
          if(key === "day_0")
            this.labelsHours.push(item.Hour);
          temp.push(parseInt(item.Counts))
        })
        this.datasetCounts.push(temp);
      }
      
      
      
      this.generateByTimeChart();
      this.loadingSearchesByHour = false;
    }, error => { console.error(error); });


  }

  generateByTimeChart() {
    var dataSets = [];

    var color = ["rgba(241,28,39,0.1)", //red
      "rgba(28,145,241,0.1)",//blue
      "rgba(231,221,28,0.1)", //yellow
      "rgba(38,231,28,0.1)", //green
      "rgba(28,231,221,0.1)", //cyan
      "rgba(231,228,211,1)", //pink
      "rgba(239,107,51,0.1)", //orange
    ];

    var colorBorder = ["rgba(241,28,39,1)", //red
      "rgba(28,145,241,1)",//blue
      "rgba(231,221,28,1)", //yellow
      "rgba(38,231,28,1)", //green
      "rgba(28,231,221,1)", //cyan
      "rgba(231,228,211,1)", //pink
      "rgba(239,107,51,1)", //orange
    ];

    this.datasetCounts.map((dataCount, index) => {
      dataSets.push({
        label: `Day ${index+1}`,
        data: dataCount, 
        borderColor: colorBorder[index],
        backgroundColor: color[index],
        borderWidth: 1
      })
    })

    this.canvasByHour = document.getElementById('ByTimeChart');
    this.ctxByHour = this.canvasByHour.getContext('2d');
    let myChart = new Chart(this.ctxByHour, {
      type: 'radar',
      data: {
        labels: this.labelsHours,
        datasets: dataSets,
      },
      options: {}
    })
  }
}