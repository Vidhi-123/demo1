import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { CalcComponent } from './calc/calc.component';
import { TodoComponent } from './todo/todo.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    CalcComponent,
    TodoComponent,
    TwowaybindComponent,
    StudentComponent,
    ProductComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
