
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createprojecttask',
  templateUrl: './createprojecttask.component.html',
  styleUrls: ['./createprojecttask.component.css']
})
export class CreateprojecttaskComponent implements OnInit {

  formData: FormGroup;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.formData=new FormGroup({
      assigned_to: new FormControl('',[Validators.required]),
      task_end_date: new FormControl('',[Validators.required]),
      task_start_date: new FormControl('',[Validators.required]),
      task_completion: new FormControl('',[Validators.required]),
      user_story_id: new FormControl('',[Validators.required])
    });
  }

  onClickSubmit(task){
    console.log(task);
    this.http.post('http://localhost:51634/api/ProjectTask',task).subscribe(
      data => {
        console.log('saved successfully');
        this.router.navigate(['/projecttask/show']);
      }
    );
  }
}
