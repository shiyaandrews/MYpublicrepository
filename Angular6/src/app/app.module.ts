import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {EmployeeComponent} from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { ShowProjectsComponent } from './project/show-projects/show-projects.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ShowUserStoriesComponent } from './userstories/show-user-stories/show-user-stories.component';
import { CreateUserStoriesComponent } from './userstories/create-user-stories/create-user-stories.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { ServeComponent } from './serve/serve.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditProjectsComponent } from './project/edit-projects/edit-projects.component';
import { DeleteProjectsComponent } from './project/delete-projects/delete-projects.component';
import { EditUserStoriesComponent } from './userstories/edit-user-stories/edit-user-stories.component';
import { DeleteUserStoriesComponent } from './userstories/delete-user-stories/delete-user-stories.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { ShowprojecttaskComponent } from './projecttask/showprojecttask/showprojecttask.component';
import { CreateprojecttaskComponent } from './projecttask/createprojecttask/createprojecttask.component';
import { EditprojecttaskComponent } from './projecttask/editprojecttask/editprojecttask.component';
import { DeleteprojecttaskComponent } from './projecttask/deleteprojecttask/deleteprojecttask.component';
import{EmployeeService} from './services/employee.service';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { CreateManagerComponent } from './managercomments/create-manager/create-manager.component';
import { ShowManagerComponent } from './managercomments/show-manager/show-manager.component';
import { EditManagerComponent } from './managercomments/edit-manager/edit-manager.component';
import { DeleteManagerComponent } from './managercomments/delete-manager/delete-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProjectComponent,
    UserstoriesComponent,
    HeaderComponent,
    FooterComponent,
    CreateEmployeeComponent,
    ShowEmployeeComponent,
    ShowProjectsComponent,
    CreateProjectComponent,
    ShowUserStoriesComponent,
    CreateUserStoriesComponent,
    EditemployeeComponent,
    ServeComponent,
    DeleteemployeeComponent,
    EditProjectsComponent,
    DeleteProjectsComponent,
    EditUserStoriesComponent,
    DeleteUserStoriesComponent,
    ProjecttaskComponent,
    ShowprojecttaskComponent,
    CreateprojecttaskComponent,
    EditprojecttaskComponent,
    DeleteprojecttaskComponent,
    ManagercommentsComponent,
    CreateManagerComponent,
    ShowManagerComponent,
    EditManagerComponent,
    DeleteManagerComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
