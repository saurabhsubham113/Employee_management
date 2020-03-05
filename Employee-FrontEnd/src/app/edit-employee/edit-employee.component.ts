import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from './../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id
  nametext = ''
  locationtext = ''
  emailtext = ''
  mobiletext = 0
  constructor(private service:EmployeeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.service.emp(this.id)
    .subscribe(response =>{
      if(response['status'] === 'success'){
        this.nametext = response['data'].name
        this.emailtext = response['data'].email
        this.locationtext = response['data'].location
        this.mobiletext = response['data'].mobile
      }else{
        alert('something went wrong!!!')
      }
    })

  }
  onUpdate(data:Employee){
    this.service.updateEmp(this.id,data.name,data.location,data.email,data.mobile)
    .subscribe(response=>{
      if(response['status']==='success'){
        alert('successfully updated!!!')
        this.router.navigate(['/employees'])
      }else{
        alert('somethig went wrong!!!')
      }
    })
  }

}
