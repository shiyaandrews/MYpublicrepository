  
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-manager',
  templateUrl: './show-manager.component.html',
  styleUrls: ['./show-manager.component.css']
})
export class ShowManagerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  comment;
  ngOnInit() {
    this.loadManagerComments();
  }

  loadManagerComments(){
    
    this.http.get('http://localhost:51634/api/Managercomment').subscribe(
      data =>{
        console.log(data);
        this.comment=data;
      }
    );
  }
}
