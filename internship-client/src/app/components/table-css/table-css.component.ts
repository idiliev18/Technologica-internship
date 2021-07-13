import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-table-css',
  templateUrl: './table-css.component.html',
  styleUrls: ['./table-css.component.css']
})
export class TableCssComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
      this.employeeService.getTasks().subscribe((employees)=>{
          this.employees = employees;
      })
  }

}
