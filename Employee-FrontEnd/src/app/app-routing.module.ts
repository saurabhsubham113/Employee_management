import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path:'',redirectTo:'/employees',pathMatch:'full'},
  {path:'employees',component:EmployeeListComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'details/:id',component:EmployeeDetailsComponent},
  {path:'edit/:id',component:EditEmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
