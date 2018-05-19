
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {
  formData:FormGroup
  constructor(private http: HttpClient,private router:Router) { }
comment;
  
  ngOnInit() {
    this.formData=new FormGroup({
      comments: new FormControl('',[Validators.required]),
      project_task_id: new FormControl('',[Validators.required])
    });
console.log(this.formData);
  }

  onClickSubmit(comment){
    
    this.http.post('http://localhost:51634/api/Managercomment',comment).subscribe(
      data => {
        console.log('saved successfully');
        this.router.navigate(['/managercomments/show']);
      }
    );
  }
}

