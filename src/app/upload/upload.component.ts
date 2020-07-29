import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://api.destination-insights.osoc.be/api/data/';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver:boolean;
  response: string;

  ngOnInit() {
    this.uploader = new FileUploader({
      url: 'https://api.destination-insights.osoc.be/api/data/',
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.hasBaseDropZoneOver = false;
    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);
  }

  public fileOverBase(e:any):void{
    this.hasBaseDropZoneOver = e;
  }


}
