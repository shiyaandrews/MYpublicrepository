
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-delete-user-stories',
  templateUrl: './delete-user-stories.component.html',
  styleUrls: ['./delete-user-stories.component.css']
})
export class DeleteUserStoriesComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute) { }
  id = this.route.snapshot.paramMap.get('id')
  userstories;

  

  ngOnInit() {
    this.formData=new FormGroup({    
      story: new FormControl('',[]),
      project_id: new FormControl('',[]),
      
        });      
        this.loadUserstories();    
      }
    
      loadUserstories(){
       this.http.get(`http://localhost:51634/api/UserStories/${this.id}`).subscribe(
       data => {
       console.log(data);
       this.userstories = data;
       this.formData=new FormGroup({
       story: new FormControl(this.userstories.story,[]),
       project_id: new FormControl(this.userstories.project_id,[]), 
       
       
        
        });
          
       }
        );
      }
    
    
      onClickSubmit(userstories){
      console.log(userstories);
      
      this.http.delete(`http://localhost:51634/api/UserStories/${this.id}`).subscribe(
      
        data => {
         
       console.log('deleted successfully');
        
        this.router.navigate(['/userstories/show']);
         
     }
        );
       } 

}


