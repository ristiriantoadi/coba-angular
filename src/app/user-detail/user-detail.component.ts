import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId:any

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.userId=this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.userId=params.get('id')
      console.log(params)
    })
    console.log(this.route)
  }

}
