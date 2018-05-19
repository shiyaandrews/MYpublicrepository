


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-manager',
  templateUrl: './delete-manager.component.html',
  styleUrls: ['./delete-manager.component.css']
})
export class DeleteManagerComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  id = this.route.snapshot.paramMap.get('id')
  formData:FormGroup;
  comment;
  ngOnInit() {
    this.formData=new FormGroup({
      comments: new FormControl('',[]),
      project_task_id: new FormControl('',[])
    })
    this.loadManagerComments();
  }

  loadManagerComments(){
    this.http.get(`http://localhost:51634/api/Managercomment/${this.id}`).subscribe(
      data =>{
        console.log(data);
        this.comment=data;
        this.formData=new FormGroup({
          comments: new FormControl(this.comment.comments,[]),
          project_task_id: new FormControl(this.comment.project_task_id,[])
        })
      }
    );
  }

  onClickSubmit(comment){
    console.log(comment);
    this.http.delete(`http://localhost:51634/api/Managercomment/${this.id}`).subscribe(
      data => {
        console.log('saved successfully');
        this.router.navigate(['/managercomments']);
      }
    );
  }
}

