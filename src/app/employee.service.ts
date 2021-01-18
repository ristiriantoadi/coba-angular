import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';
import { ITodo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private url = "/assets/data/employee.json"
  // private url = "/assets/data/employees.json"


  getEmployees():Observable<IEmployee[]>{
    let headers = new HttpHeaders().set('xsrf-token','some_token').set('another-header','someheader')
    return this.http.get<IEmployee[]>(this.url,{ headers }).pipe(
      catchError((error:HttpErrorResponse)=>{
        return throwError(error || "server error")
      })
    )
  }

  postRequest(data:any):Observable<any>{
    return this.http.post("http://google.com",data).pipe(
      catchError((error:HttpErrorResponse)=>{
        return throwError(error || "server error")
      })
    )
  }

  getTodos():Observable<IEmployee>{
    return this.http.get<IEmployee>("https://jsonplaceholder.typicode.com/todos?userId=1").pipe(
      catchError((error:HttpErrorResponse)=>{
        return throwError(error || "server error")
      })
    )
  }

  postTodo(data:ITodo):Observable<any>{
    let headers = new HttpHeaders().set('xsrf-token','some_token').set('another-header','someheader')
    return this.http.post("https://jsonplaceholder.typicode.com/todos",data,{headers}).pipe(
      catchError((error:HttpErrorResponse)=>{
        return throwError(error || "server error")
      })
    )
  }

  // errorHandling(error:HttpErrorResponse){
  //   return throwError(error || "server error")
  // }
}
