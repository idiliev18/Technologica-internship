import { Employee } from './../../Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-table-flex',
  templateUrl: './table-flex.component.html',
  styleUrls: ['./table-flex.component.css']
})
export class TableFlexComponent implements OnInit {

    employees: Employee[] = [];
    constructor(private employeeService: EmployeesService) { }

    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe((employees)=>{
            this.employees = employees;
        })
    }

}
