import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Employee[] = []
  filterEmp:Employee[] = []
  constructor(private service:EmployeeService,
    private titleservice:Title,
    private router:Router) {
    this.getDetails() 
    titleservice.setTitle('Employees')
  }

  ngOnInit() {
    
  }
  set(){
    this.titleservice.setTitle('edit Employee')
  }

  filter(querry:string){
    this.filterEmp = querry ?
    this.employee.filter(e=> e.name.toLowerCase().includes(querry.toLowerCase())) :
    this.employee
  }

  getDetails(){
    this.service.getList()
    .subscribe(response=>{
      if(response['status'] === 'success')
        this.filterEmp = this.employee = response['data']
        
      else
        alert('something went wrong')
        
    })
  }

  onDelete(data){
    if(!confirm('Are you sure you want to delete ?')) return

    this.service.delEmp(data)
    .subscribe(response=>{
      if(response['status'] === 'success'){
        console.log(data)
        alert('successfully deleted')
        this.getDetails()
      }else{
        alert('something went wrong!!!')
      }
    })
  }
}
