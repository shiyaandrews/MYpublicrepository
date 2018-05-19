import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import{EmployeeComponent} from './employee/employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';

import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ShowProjectsComponent } from './project/show-projects/show-projects.component';
import { EditProjectsComponent } from './project/edit-projects/edit-projects.component';
import { DeleteProjectsComponent } from './project/delete-projects/delete-projects.component';

import { UserstoriesComponent } from './userstories/userstories.component';
import { ShowUserStoriesComponent } from './userstories/show-user-stories/show-user-stories.component';
import { CreateUserStoriesComponent } from './userstories/create-user-stories/create-user-stories.component';
import { EditUserStoriesComponent } from './userstories/edit-user-stories/edit-user-stories.component';
import { DeleteUserStoriesComponent } from './userstories/delete-user-stories/delete-user-stories.component';

import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { ShowprojecttaskComponent } from './projecttask/showprojecttask/showprojecttask.component';
import { CreateprojecttaskComponent } from './projecttask/createprojecttask/createprojecttask.component';
import { EditprojecttaskComponent } from './projecttask/editprojecttask/editprojecttask.component';
import { DeleteprojecttaskComponent } from './projecttask/deleteprojecttask/deleteprojecttask.component';

import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { CreateManagerComponent } from './managercomments/create-manager/create-manager.component';
import { ShowManagerComponent } from './managercomments/show-manager/show-manager.component';
import { EditManagerComponent } from './managercomments/edit-manager/edit-manager.component';
import { DeleteManagerComponent } from './managercomments/delete-manager/delete-manager.component';


const routes:Routes=[
  {
    path:'home',
    component:HomeComponent,
    children:[]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'employee',
    component:EmployeeComponent,
    children:[{
      path:'create',
      component:CreateEmployeeComponent,
      children:[]
  },
  {
    path:'show',
    component:ShowEmployeeComponent,
    children:[]
  },
  {
    path:'edit/:id',
    component:EditemployeeComponent,
    children:[]
  },
  {
    path:'delete/:id',
    component:DeleteemployeeComponent,
    children:[]
  },
  {
    path:'',
    redirectTo:'/employee/show',
    pathMatch:'full',
  }]
},
  {
    path:'project',
    component:ProjectComponent,
    children:[{
      path:'create',
      component:CreateProjectComponent,
      children:[]
    },
    {
      path:'show',
      component:ShowProjectsComponent,
      children:[]
    },
    {
      path:'edit/:id',
      component:EditProjectsComponent,
      children:[]
    },
    {
      path:'delete/:id',
      component:DeleteProjectsComponent,
      children:[]
    },
    {
      path:'',
      redirectTo:'/project/show',
      pathMatch:'full',
    }]
  },
  {
    path:'userstories',
    component:UserstoriesComponent,
    children:[{
      path:'create',
      component:CreateUserStoriesComponent,
      children:[]
    },
    {
      path:'show',
      component:ShowUserStoriesComponent,
      children:[]
    },
    {
      path:'edit/:id',
      component:EditUserStoriesComponent,
      children:[]
    },
    {
      path:'delete/:id',
      component:DeleteUserStoriesComponent,
      children:[]
    },
    {
      path:'',
      redirectTo:'/userstories/show',
      pathMatch:'full',
    }]
  },
    {
      path:'projecttask',
      component:ProjecttaskComponent,
      children:[{
        path:'create',
        component:CreateprojecttaskComponent,
        children:[]
      },
      {
        path:'show',
        component:ShowprojecttaskComponent,
        children:[]
      },
      {
        path:'edit/:id',
        component:EditprojecttaskComponent,
        children:[]
      },
      {
        path:'delete/:id',
        component:DeleteprojecttaskComponent,
        children:[]
      },
      {
        path:'',
        redirectTo:'/projecttask/show',
        pathMatch:'full',
      }]
  },
  {
    path:'managercomments',
    component:ManagercommentsComponent,
    children:[{
      path:'create',
      component:CreateManagerComponent,
      children:[]
    },
    {
      path:'show',
      component:ShowManagerComponent,
      children:[]
    },
    {
      path:'edit/:id',
      component:EditManagerComponent,
      children:[]
    },
    {
      path:'delete/:id',
      component:DeleteManagerComponent,
      children:[]
    },
    {
      path:'',
      redirectTo:'/managercomments/show',
      pathMatch:'full',
    }
  ]},
  {
    path:'header',
    component:HeaderComponent,
    children:[]
  },
  {
    path:'footer',
    component:FooterComponent,
    children:[]
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
    
  declarations: []
})
export class AppRoutingModule { }
