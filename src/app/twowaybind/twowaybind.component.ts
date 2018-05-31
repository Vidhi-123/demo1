import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.css']
})
export class TwowaybindComponent implements OnInit {
  str:string="HETVEE SHAH"
  no1:number=0;
  no2:number=0;
  ans:Number;
  flag:boolean=true;
  onAdd()
  {
    this.ans=this.no1+this.no2;
  }
  onClick()
  {
    if(this.flag){
        this.flag=false
    }
    else
    {
      this.flag=true
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
