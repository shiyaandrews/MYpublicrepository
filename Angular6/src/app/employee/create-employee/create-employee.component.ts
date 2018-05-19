import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  formData:FormGroup;


  constructor(private http:HttpClient,private router:Router) { }employee;

  ngOnInit() {
    this.formData=new FormGroup({
      employee_name:new FormControl('',[Validators.required]),
      deignation:new FormControl('',[Validators.required]),
      manager_id:new FormControl('',[Validators.required]),
      contact_no:new FormControl('',[Validators.required]),
      email_id:new FormControl('',[Validators.required,Validators.pattern('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')]),
      skillsets:new FormControl('',[Validators.required])
      

    });
    this.showEmployees();
  }
    showEmployees(){
      this.http.get('http://localhost:51634/api/Employee').subscribe(
        data => {
          this.employee=data;
        }
      );
    }
  
    onClickSubmit(employee){
      console.log(employee);
      this.http.post('http://localhost:51634/api/Employee',employee).subscribe(
        data => {
          console.log('saved successfully');
          this.router.navigate(['/employee/show']);
        }
      );
    }
  
  }
  
 
    