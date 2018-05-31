import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  no1:number;
  no2:number;
  ans:number;
  y="";
  flag:number;
  onClick1(){
    this.y+="1"
  }
  onClick2(){
    this.y+="2"
  }
  onClick3(){
    this.y+="3"
  }
  onClick4(){
    this.y+="4"
  }
  onClick5(){
    this.y+="5"
  }
  onClick6(){
    this.y+="6"
  }
  onClick7(){
    this.y+="7"
  }
  onClick8(){
    this.y+="8"
  }
  onClick9(){
    this.y+="9"
  }
  onClick0(){
    this.y+="0"
  }
  onClickplus(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=1;
  }
  onClicksub(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=2;
  }
  onClickmul(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=3;
  }
  onClickdiv(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=4;
  }
  onClickcl(){
    this.y=""
  }
  oneq(){
    this.no2=parseInt(this.y);
    if(this.flag==1){
      this.ans=this.no1+this.no2;
      this.y=this.ans+"";
    }
    if(this.flag==2){
      this.ans=this.no1-this.no2;
      this.y=this.ans+"";
    }
    if(this.flag==3){
      this.ans=this.no1*this.no2;
      this.y=this.ans+"";
    }
    if(this.flag==4){
      this.ans=this.no1/this.no2;
      this.y=this.ans+"";
    }
  }
}
