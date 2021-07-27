import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpclient : HttpClient) { }
  fetchData(url:any):Observable<any>{
    return this.httpclient.get<any>(url)
  }
}

