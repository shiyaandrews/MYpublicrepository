import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{EmployeeService} from '../../services/employee.service';


@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeService) { }
  employee;

  ngOnInit() {
    this.employeeservice.employee$.subscribe(
      data=>{
    this.employee=data;
    console.log(data);
  });
  this.employeeservice.ErrorResponse$.subscribe(
    message=>{
 
  console.log(message);
  alert(message.message);
});
    this.employeeservice.getAllEmployees();
  }
  
      

}
