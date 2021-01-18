import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private url = "/assets/data/employee.json"

  getEmployees():Observable<IEmployee[]>{
    let headers = new HttpHeaders().set('xsrf-token','some_token').set('another-header','someheader')
    return this.http.get<IEmployee[]>(this.url,{ headers })
  }
}
