import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  allEmployees: Observable<Employee[]>;  
  dataSaved = false;  
  
  employeeIdUpdate = null;  
  massage = null;  
  
  EmployeeForm : FormGroup;
  title = 'EmployeeData';
  
  OnSubmit()
  {
    this.EmployeeForm.value;
     console.log("Submitted");
     this.EmployeeForm.reset();
   
   
  }

  constructor(private employeeService: EmployeeService) { }

 

  ngOnInit() {
    this.EmployeeForm = new FormGroup({
      EmpId: new FormControl('', Validators.required),
      EmpName: new FormControl('', Validators.required),
      EmpAge: new FormControl('', Validators.required),
      Salary: new FormControl('', [Validators.required])
    })
    this.loadAllEmployees();
  }
  loadAllEmployees() {  
    this.allEmployees = this.employeeService.getAllEmployee();  
  }  
  CreateEmployee() {  
   let employee= this.EmployeeForm.value;
   
   if (this.employeeIdUpdate == null) {  
    this.employeeService.AddEmployee(employee).subscribe(  
      () => {  
        this.dataSaved = true;  
        this.massage = 'Record saved Successfully';  
        this.loadAllEmployees();  
        this.employeeIdUpdate = null;  
        this.EmployeeForm.reset();  
      }  
    );  
  } else {  
    employee.EmpId = this.employeeIdUpdate;  
    this.employeeService.UpdateEmployee(employee).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Updated Successfully';  
      this.loadAllEmployees();  
      this.employeeIdUpdate = null;  
      this.EmployeeForm.reset();  
    });  
  }  
    } 
   Delete(empId :string)
   {
   if(confirm("If you want to delete this?"))
   {
     this.employeeService.DeleteEmployee(empId).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllEmployees();  
      this.employeeIdUpdate = null;  
      this.EmployeeForm.reset();  
    });  
   }
   }
   LoadEmployee(empId :string)
   {
      
      this.employeeService.getEmployeeById(empId).subscribe(employee=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.employeeIdUpdate = employee.EmpId;  
      this.EmployeeForm.controls['EmpId'].setValue(employee.EmpId);  
      this.EmployeeForm.controls['EmpName'].setValue(employee.EmpName);  
      this.EmployeeForm.controls['EmpAge'].setValue(employee.EmpAge);  
      this.EmployeeForm.controls['Salary'].setValue(employee.Salary);  
     
    });  
  

   }
     
 
}
