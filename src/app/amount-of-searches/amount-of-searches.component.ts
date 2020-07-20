import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import * as Chart from 'chart.js';
import { DataService } from '../service/data.service';
import { DestCount } from '../models/destCount';
import { OrigCount } from '../models/origCount';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-amount-of-searches',
  templateUrl: './amount-of-searches.component.html',
  styleUrls: ['./amount-of-searches.component.css']
})
export class AmountOfSearchesComponent implements OnInit {

  public loadingDestinations = false;
  public loadingOrigins = false;

  canvasOrig: any;
  ctxOrig: any;

  canvasDest: any;
  ctxDest: any;

  public dataDest: DestCount[];
  public dataOrig: OrigCount[];

  public labelsDest: string[] = [];
  public datasetDest: number[] = [];

  public labelsOrig: string[] = [];
  public datasetOrig: number[] = [];


  constructor(private ds: DataService) { }

  ngOnInit(): void {
    //gets the data for the destination count
    this.getDestCountData();
    //gets the data for the origin count
    this.getOrigCountData();

  }

  //gets the data for the destination count
  getDestCountData() {
    this.loadingDestinations = true;
    //receive data
    this.ds.getDestCountData().subscribe(data => {
      this.dataDest = data; console.log(data)
      this.dataDest.forEach(data => this.labelsDest.push(data.Destination));
      this.dataDest.forEach(data => this.datasetDest.push(data.Counts));
      this.generateDestChart();
      this.loadingDestinations = false;
    }, error => { console.error(error); });


  }

  //gets the data for the origin count
  getOrigCountData() {
    this.loadingOrigins = true;

    this.ds.getOrigCountData().subscribe(data => {
      this.dataOrig = data; console.log(this.dataOrig);
      this.dataOrig.forEach(item => {
        this.labelsOrig.push(item.Origin);
      });
      this.dataOrig.forEach(data => this.datasetOrig.push(data.Counts));
      this.generateOrigChart();
      this.loadingDestinations = false;
    }, error => { console.error(error); });

  }

  //generates the destination chart
  generateDestChart() {
    this.canvasDest = document.getElementById('destChart');
    this.ctxDest = this.canvasDest.getContext('2d');
    let myChart = new Chart(this.ctxDest, {
      type: 'line',
      data: {
        labels: this.labelsDest,
        datasets: [{
          label: 'Most searched for destination',
          data: this.datasetDest,
          borderColor: ["#006ab3"],
          backgroundColor: ["#dadbd9"],
          borderWidth: 1
        }]
      },
      options: {}
    })
  }

  //generates the origin chart
  generateOrigChart() {
    this.canvasOrig = document.getElementById('origChart');
    this.ctxOrig = this.canvasOrig.getContext('2d');
    let myChart = new Chart(this.ctxOrig, {
      type: 'line',
      data: {
        labels: this.labelsOrig,
        datasets: [{
          label: 'Most searched for origin',
          data: this.datasetOrig,
          borderColor: ["#006ab3"],
          backgroundColor: ["#dadbd9"],
          borderWidth: 1
        }]
      },
      options: {}
    })
  }
}
