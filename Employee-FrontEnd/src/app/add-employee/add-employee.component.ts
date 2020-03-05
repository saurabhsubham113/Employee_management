import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService,
    titleservice:Title,
    private router:Router) {
      titleservice.setTitle('add Employee')
     }

  ngOnInit() {
  }

  onSubmit(data){
    console.log(data)
    this.service.addEmp(data.name,data.location,data.email,data.mobile)
    .subscribe(response=>{
      if(response['status'] === 'success'){
        alert('successfully added')
        this.router.navigate(['/employees'])
      }else{
        alert('something went worng')
      }
    })
  }
}
