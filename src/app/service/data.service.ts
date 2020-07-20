import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../models/data';
import { DestCount} from '../models/destCount';
import { OrigCount} from '../models/origCount';
import { OrigDestPairs } from '../models/origDestPairs';

@Injectable()
export class DataService {

   public dataServiceURI: string = 'http://localhost:3000/api/data';
   private contentHeaders: HttpHeaders;

   constructor(private http: HttpClient) {
      this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   }

   // Get all the data
   getAllData(): Observable<Data[]> {
      let url = `${this.dataServiceURI}`;
      return this.http.get<Data[]>(url);
   }

   getDestCountData(): Observable<DestCount[]>{
      let url = `${this.dataServiceURI}/cntDest`;
      return this.http.get<DestCount[]>(url);
   }

   getOrigCountData(): Observable<OrigCount[]>{
      let url = `${this.dataServiceURI}/cntOrig`;
      return this.http.get<OrigCount[]>(url);
   }

   getOrigDestPairsData(): Observable<OrigDestPairs[]> {
      let url = `${this.dataServiceURI}/origDestPairs`;
      return this.http.get<OrigDestPairs[]>(url);
   }

}
