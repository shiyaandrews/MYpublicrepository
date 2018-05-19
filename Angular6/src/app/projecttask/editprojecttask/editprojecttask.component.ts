
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprojecttask',
  templateUrl: './editprojecttask.component.html',
  styleUrls: ['./editprojecttask.component.css']
})
export class EditprojecttaskComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }

  id = this.route.snapshot.paramMap.get('id')
  projecttask;
  formData: FormGroup;
  ngOnInit() {
    this.formData=new FormGroup({
      assigned_to: new FormControl('',[]),
      task_end_date: new FormControl('',[]),
      task_start_date: new FormControl('',[]),
      task_completion: new FormControl('',[]),
      user_story_id: new FormControl('',[])
    });
    this.loadTask();
  }

  loadTask(){
    this.http.get(`http://localhost:51634/api/ProjectTask/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.projecttask = data;
        this.formData=new FormGroup({
          assigned_to: new FormControl(this.projecttask.assigned_to,[Validators.required]),
          task_end_date: new FormControl(this.projecttask.task_end_date,[Validators.required]),
          task_start_date: new FormControl(this.projecttask.task_start_date,[Validators.required]),
          task_completion: new FormControl(this.projecttask.task_completion,[Validators.required]),
          user_story_id: new FormControl(this.projecttask.user_story_id,[Validators.required])
        });
      }
    );
  }
  onClickSubmit(projecttask){
    console.log(projecttask);
    this.http.put(`http://localhost:51634/api/ProjectTask/${this.id}`,projecttask).subscribe(
      data => {
        console.log('saved successfully');
        this.router.navigate(['/projecttask/show']);
      }
    );
  }
}

