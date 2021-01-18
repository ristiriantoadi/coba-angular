import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:IEmployee[] = []
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getTodos()
    .subscribe(data=>{
      console.log(data)
    })
    let data = {
      userId: 10,
      title: "delectus aut autem",
      completed: false
    }
    this.employeeService.postTodo(data).subscribe(data=>{
        // this.employees = data
        console.log(data)
      },
      error=>{
        console.log(error)
      })



    // this.employeeService.getEmployees()
    // .subscribe(data=>{
    //   this.employees = data
    //   console.log(this.employees)
    // },
    // error=>{
    //   console.log(error)
    // })
  
    // this.employeeService.postRequest({"data":"123"}).subscribe(data=>{
    //   this.employees = data
    //   console.log(this.employees)
    // },
    // error=>{
    //   console.log(error)
    // })
    

  }

}
