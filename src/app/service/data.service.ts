import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../models/data';

@Injectable()
export class DataService {

   public dataServiceURI: string = 'http://localhost:3000/api';
   private contentHeaders: HttpHeaders;

   constructor(private http: HttpClient) {
      this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   }

   // Get all the data
   getAllData(): Observable<Data[]> {
      let url = `${this.dataServiceURI}/data`;
      return this.http.get<Data[]>(url);
   }
}
