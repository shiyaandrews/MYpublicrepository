import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
  formData:FormGroup;
  constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute) { }
  id = this.route.snapshot.paramMap.get('id')
  employee;
  

  ngOnInit() {
    this.formData=new FormGroup({    
      employee_name: new FormControl('',[]),
      deignation: new FormControl('',[]),
      manager_id: new FormControl('',[]),
      contact_no: new FormControl('',[]),
      email_d: new FormControl('',[]),
      skillsets: new FormControl('',[])
      
        });      
       this.loadEmployee();    
       }
     
       loadEmployee(){
        this.http.get(`http://localhost:51634/api/Employee/${this.id}`).subscribe(
        data => {
        console.log(data);
        this.employee = data;
        this.formData=new FormGroup({
        employee_name: new FormControl(this.employee.employee_name,[]),
        deignation: new FormControl(this.employee.deignation,[]), 
        manager_id: new FormControl(this.employee.manager_id,[]),
        contact_no: new FormControl(this.employee.contact_no,[]),
        email_id: new FormControl(this.employee.email_id,[]),
        skillsets: new FormControl(this.employee.skillsets,[])
         
         });
           
        }
         );
       }
     
     
       onClickSubmit(employee){
       console.log(employee);
       
       this.http.delete(`http://localhost:51634/api/Employee/${this.id}`).subscribe(
       
         data => {
          
        console.log('deleted successfully');
         
         this.router.navigate(['/employee']);
          
      }
         );
        } 

}
