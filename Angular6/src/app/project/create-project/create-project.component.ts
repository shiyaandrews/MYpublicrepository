import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router) { }
  project;

  ngOnInit() {
    this.formData=new FormGroup({
      
      project_name:new FormControl('',[Validators.required]),
      start_date:new FormControl('',[Validators.required]),     
      end_date:new FormControl('',[Validators.required]),
      client_name:new FormControl('',[Validators.required])
      
  });
  console.log(this.formData);
  }
onClickSubmit(project){
  this.http.post('http://localhost:51634/api/Project',project).subscribe(
    data=>{
      console.log('Saved Successfully');
      this.router.navigate(['/project/show']);
    }
  );

}
}





