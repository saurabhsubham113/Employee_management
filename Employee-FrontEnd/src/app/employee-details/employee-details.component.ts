import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee[] = [] 

  constructor(private service:EmployeeService,private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.getEmp(id)
  }

  getEmp(id){
    this.service.emp(id)
    .subscribe(response=>{
      if(response['status'] === 'success'){
        this.employee = response['data']
      }else{
        alert('something went wrong!!!')
      }
    })
  }

}
