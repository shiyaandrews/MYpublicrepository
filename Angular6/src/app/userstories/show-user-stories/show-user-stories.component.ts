import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-show-user-stories',
  templateUrl: './show-user-stories.component.html',
  styleUrls: ['./show-user-stories.component.css']
})
export class ShowUserStoriesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  userstories;

  ngOnInit() {
    this.loadUserStories();
  }
  loadUserStories(){
    this.http.get('http://localhost:51634/api/UserStories').subscribe(
      data=>{
        console.log(data);
        this.userstories=data;
      }
    )
  }

}
