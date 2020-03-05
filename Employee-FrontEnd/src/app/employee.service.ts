import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = environment.url

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get(this.url + '/view')
  }

  emp(id){
    return this.http.get(this.url + '/view/' + id)
  }

  addEmp(name:string,location:string,email:string,mobile:number){
    const body = {
      name:name,
      location:location,
      email:email,
      mobile:mobile
    }
    return this.http.post(this.url + '/add',body)
  }

  updateEmp(id,name:string,location:string,email:string,mobile:number){
    const body = {
      name:name,
      location:location,
      email:email,
      mobile:mobile
    }
    return this.http.put(this.url + '/edit/' + id,body)
  }
  delEmp(id){
    return this.http.delete(this.url +'/delete/' + id)
  }
}
