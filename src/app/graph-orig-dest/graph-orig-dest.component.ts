import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DataService } from '../service/data.service';
import { DestCount } from '../models/destCount';
import { OrigCount } from '../models/origCount';

@Component({
  selector: 'app-graph-orig-dest',
  templateUrl: './graph-orig-dest.component.html',
  styleUrls: ['./graph-orig-dest.component.css']
})
export class GraphOrigDestComponent implements OnInit {
  
  canvasOrig: any;
  ctxOrig: any;

  canvasDest: any;
  ctxDest: any;

  public dataDest: DestCount[];
  public dataOrig: OrigCount[];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.getDestCountData();
    this.getOrigCountData();  
    this.generateDestChart();
    this.generateOrigChart();
  }

  getDestCountData(){  
    this.ds.getDestCountData().subscribe(data => { this.dataDest = data; console.log(data)}, error => { console.error(error); });
   }

   getOrigCountData(){
    this.ds.getOrigCountData().subscribe(data => { this.dataOrig = data; console.log(data)}, error => { console.error(error); });
   }

   generateDestChart(){
    this.canvasDest = document.getElementById('destChart');
    this.ctxDest = this.canvasDest.getContext('2d');
    let myChart = new Chart(this.ctxDest, {
      type: 'bar',
      data: {
          labels: ["USA", "Spain", "Italy", "France", "Germany", "UK", "Turkey", "Iran", "China", "Russia", "Brazil", "Belgium", "Canada", "Netherlands", "Switzerland", "India", "Portugal", "Peru", "Ireland", "Sweden"],
          datasets: [{
              label: 'Total cases.',
              data: [886789, 213024, 189973, 158183, 153129, 138078, 101790, 87026, 82804, 62773, 50036, 42797, 42110, 35729, 28496, 23502, 22353, 20914, 17607, 16755],
              backgroundColor: ["red", , , , , , , , "orange"],
              borderWidth: 1
          }]
      },
      options: {}
    })}
   
   generateOrigChart(){
    this.canvasOrig = document.getElementById('origChart');
    this.ctxOrig = this.canvasOrig.getContext('2d');
    let myChart = new Chart(this.canvasOrig, {
      type: 'bar',
      data: {
          labels: ["USA", "Spain", "Italy", "France", "Germany", "UK", "Turkey", "Iran", "China", "Russia", "Brazil", "Belgium", "Canada", "Netherlands", "Switzerland", "India", "Portugal", "Peru", "Ireland", "Sweden"],
          datasets: [{
              label: 'Total cases.',
              data: [886789, 213024, 189973, 158183, 153129, 138078, 101790, 87026, 82804, 62773, 50036, 42797, 42110, 35729, 28496, 23502, 22353, 20914, 17607, 16755],
              backgroundColor: ["red", , , , , , , , "orange"],
              borderWidth: 1
          }]
      },
      options: {}
    })}
}
