import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [
    {id:1,name:"Risti"},
    {id:2,name:"adi"},
    {id:3,name:"abc"},
    {id:4,name:"anto"},
    {id:5,name:"rian"},
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(user:any){
    this.router.navigate(['/user',user.id])
  }

}
