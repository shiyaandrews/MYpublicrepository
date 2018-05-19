import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-delete-projects',
  templateUrl: './delete-projects.component.html',
  styleUrls: ['./delete-projects.component.css']
})
export class DeleteProjectsComponent implements OnInit {
  formData:FormGroup;
  constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute) { }
  id = this.route.snapshot.paramMap.get('id')
  project;

  

  ngOnInit() {
    this.formData=new FormGroup({    
      project_name: new FormControl('',[]),
      start_date: new FormControl('',[]),
      end_date: new FormControl('',[]),
      client_name: new FormControl('',[])      
      
        });      
        this.loadProject();    
      }
    
      loadProject(){
       this.http.get(`http://localhost:51634/api/project/${this.id}`).subscribe(
       data => {
       console.log(data);
       this.project = data;
       this.formData=new FormGroup({
       project_name: new FormControl(this.project.project_name,[]),
       start_date: new FormControl(this.project.start_date,[]), 
       end_date: new FormControl(this.project.end_date,[]),
       client_name: new FormControl(this.project.client_name,[]),
       
        
        });
          
       }
        );
      }
    
    
      onClickSubmit(project){
      console.log(project);
      
      this.http.delete(`http://localhost:51634/api/project/${this.id}`).subscribe(
      
        data => {
         
       console.log('deleted successfully');
        
        this.router.navigate(['/project/show']);
         
     }
        );
       } 

}

