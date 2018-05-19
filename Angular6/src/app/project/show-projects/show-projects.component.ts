import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  project;

  ngOnInit() {
    this.loadProjects();
  }
  loadProjects(){
    this.http.get('http://localhost:51634/api/Project').subscribe(
      data=>{
        console.log(data);
        this.project=data;
      }
    )
  }

}
