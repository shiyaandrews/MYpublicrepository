import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  formData:FormGroup;


  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  id=this.route.snapshot.paramMap.get('id');
employee;
  ngOnInit() {
    this.formData=new FormGroup({
      employee_name:new FormControl('',[]),
      deignation:new FormControl('',[]),
      manager_id:new FormControl('',[]),
      contact_no:new FormControl('',[]),
      email_id:new FormControl('',[]),
      skillsets:new FormControl('',[])
    });
    this.loadEmployees();
  }
  loadEmployees(){
    this.http.get(`http://localhost:51634/api/Employee/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.employee=data;
        this.formData=new FormGroup({
          employee_name:new FormControl(this.employee.employee_name,[]),
          deignation:new FormControl(this.employee.deignation,[]),
          manager_id:new FormControl(this.employee.manager_id,[]),
          contact_no:new FormControl(this.employee.contact_no,[]),
          email_id:new FormControl(this.employee.email_id,[]),
          skillsets:new FormControl(this.employee.skillsets,[])
      });
    }
  );
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
      this.http.put(`http://localhost:51634/api/Employee/${this.id}`,employee).subscribe(
        data=>{
          console.log('Saved Successfully');
          this.router.navigate(['/employee/show']);
        }
      );
    
    }
  }
    
  


