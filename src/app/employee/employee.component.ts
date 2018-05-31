import { Component, OnInit } from '@angular/core';
import { emp } from './emp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  no:number;
  name:string;
  sal:number;
  des:string;
  mob:string;
  gen:string;
arr:emp[]=[
  new emp(1,'Hetvee',25000,'Purchase Manager','1234567891','female'),
  new emp(2,'Vidhi',20000,'Clerk','9884567891','female'),
  new emp(3,'Dhruvi',35000,'CEO','8834567891','female')
];
onAdd()
{
  this.arr.push(new emp(this.no,this.name,this.sal,this.des,this.mob,this.gen))
}
onDelete(i){
  this.arr.splice(i,1);
}
onUpdate(item){
  item.sal=item.sal+5000;
}
  constructor() { }

  ngOnInit() {
  }

}
