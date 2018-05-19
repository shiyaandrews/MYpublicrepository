
import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user-stories',
  templateUrl: './edit-user-stories.component.html',
  styleUrls: ['./edit-user-stories.component.css']
})
export class EditUserStoriesComponent implements OnInit {
  formData:FormGroup;


  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  id=this.route.snapshot.paramMap.get('id');
userstories;
  ngOnInit() {
    this.formData=new FormGroup({
      story:new FormControl('',[]),
      project_id:new FormControl('',[]),
      
    });
    this.loadUserstories();
  }
  loadUserstories(){
    this.http.get(`http://localhost:51634/api/UserStories/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.userstories=data;
        this.formData=new FormGroup({
          story:new FormControl(this.userstories.story,[]),
          project_id:new FormControl(this.userstories.project_id,[]),
          
      });
    }
  );
}
    onClickSubmit(userstories){
      this.http.put(`http://localhost:51634/api/UserStories/${this.id}`,userstories).subscribe(
        data=>{
          console.log('Saved Successfully');
          this.router.navigate(['/userstories/show']);
        }
      );
    
    }
  }
    
  


