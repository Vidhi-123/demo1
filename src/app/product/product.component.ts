import { Component, OnInit } from '@angular/core';
import { pro } from './pro';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arr:number[]=[];
  num1:number;
  no:number;
  name:string;
  price:number;
  image:string="../assets/h2.jpg";
  mfg:string;
  soh:number;
  arr1:pro[]=[
    new pro(1,'AIRCONDITIONER',10000,'','abc',20),
    new pro(2,'TELEVISION',20000,'','abd',30),
    new pro(3,'FRIDGE',30000,'','xyz',40)
  ];
  onAdd() {
    this.arr1.push(new pro(this.no,this.name,this.price,this.image,this.mfg,this.soh))
  }
  onDelete(i){
    this.arr1.splice(i,1);
  }
  onUpdate(item){
    item.soh=parseInt(item.soh)+1;
  }

  constructor() { }


  ngOnInit() {
    for(let num1=1;num1<=50;num1++){
      this.arr.push(num1);
    }
  }

}
