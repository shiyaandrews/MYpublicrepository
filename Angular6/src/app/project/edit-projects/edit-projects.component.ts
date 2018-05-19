import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {
  formData:FormGroup;

  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  id=this.route.snapshot.paramMap.get('id');
project;
ngOnInit() {
  this.formData=new FormGroup({
    project_name:new FormControl('',[]),
    start_date:new FormControl('',[]),
    end_date:new FormControl('',[]),
    client_name:new FormControl('',[]),
    
  });
  this.loadProject();
}
loadProject(){
  this.http.get(`http://localhost:51634/api/project/${this.id}`).subscribe(
    data=>{
      console.log(data);
      this.project=data;
      this.formData=new FormGroup({
        project_name:new FormControl(this.project.project_name,[]),
        start_date:new FormControl(this.project.start_date,[]),
        end_date:new FormControl(this.project.end_date,[]),
        client_name:new FormControl(this.project.client_name,[])
        
    });
  }
);
}
  onClickSubmit(project){
    this.http.put(`http://localhost:51634/api/project/${this.id}`,project).subscribe(
      data=>{
        console.log('Saved Successfully');
        this.router.navigate(['/project/show']);
      }
    );
  
  }
}
