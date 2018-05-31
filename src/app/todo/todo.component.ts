import { Component, OnInit } from '@angular/core';

import { Task1 } from './Task1';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  arr1:string[]=[
    'PENDING',
    'DONE'
  ]

  arr:Task1[]=[
    new Task1(1,'EMAIL TO MANAGER','PENDING'),
    new Task1(2,'PUSH CODE TO GITHUB','PENDING'),
    new Task1(3,'GO FOR MOVIE','DONE'),
  ];
  onAdd(x,y,z){
    this.arr.push(new Task1(x,y,z));
  }
  onDelete(i){
    this.arr.splice(i,1);
  }
  onUpdate(item:Task1){
    if(item.status=='PENDING'){
      item.status='DONE';
    }
    else{
      item.status='PENDING';

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
