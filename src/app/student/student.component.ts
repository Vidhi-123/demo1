import { Component, OnInit } from '@angular/core';
import { info } from './info';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  no:number;
  name:string;
  mob:string;
  city:string;
  fees:number;
  gender:string;
  status:string;
  s:string[]=[
    'pass',
    'fail'
  ];
  c:string[]=[
    'Pune',
    'Ahmedabad',
    'Surat'
  ];

  arr:info[]=[
    new info(1,'Hetvee','1234567891','female','Ahmedabad',5000,'pass'),
    new info(2,'Dhruvi','9998567891','female','Rajkot',6000,'fail'),
    new info(3,'Vidhi','8564567891','female','Banglore',10000,'pass')
   ];
  onAdd(){
    this.arr.push(new info(this.no,this.name,this.mob,this.gender,this.city,this.fees,this.status));
  }
  onDelete(i){
    this.arr.splice(i,1);
  }
  onUpdate(item){
    if(item.status=="pass")
    {
      item.status="Inactive";
    }
    else
    {
      item.status="Active";
    }


  }


  constructor() { }

  ngOnInit() {
  }

}
