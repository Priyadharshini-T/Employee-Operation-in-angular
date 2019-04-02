import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Employee } from './employee';  
  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url ="http://localhost/EmpWebApi/api";
  constructor(private http:HttpClient) { }
  getAllEmployee(): Observable<Employee[]> {  
    return this.http.get<Employee[]>(this.url + '/values');  
  }  
  AddEmployee(employee :Employee ): any{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Employee>(this.url+'/values',employee,httpOptions);
  }
  DeleteEmployee(Id : string):Observable<number>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<number>(this.url+'/values/'+Id,httpOptions);
  }
  UpdateEmployee(employee:Employee) :Observable<Employee>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Employee>(this.url + '/values/', employee, httpOptions);
  }
 
  getEmployeeById(employeeId: string): Observable<Employee> {  
    return this.http.get<Employee>(this.url + '/values/' + employeeId);  
  }  
  
}

