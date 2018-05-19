import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';


@Component({
  selector: 'app-create-user-stories',
  templateUrl: './create-user-stories.component.html',
  styleUrls: ['./create-user-stories.component.css']
})
export class CreateUserStoriesComponent implements OnInit {
  formData:FormGroup;

  constructor(private http:HttpClient,private router:Router) { }
  userstories;

  ngOnInit() {
    this.formData=new FormGroup({
      
      story:new FormControl('',[Validators.required]),
      project_id:new FormControl('',[Validators.required]),     
      
      
  });
  console.log(this.formData);
  }
onClickSubmit(userstories){
  this.http.post('http://localhost:51634/api/UserStories',userstories).subscribe(
    data=>{
      console.log('Saved Successfully');
      this.router.navigate(['/userstories/show']);
    }
  );

}
}





