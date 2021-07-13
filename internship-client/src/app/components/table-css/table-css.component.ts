import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/Employee';

@Component({
    selector: 'app-table-css',
    templateUrl: './table-css.component.html',
    styleUrls: ['./table-css.component.css'],
})
export class TableCssComponent implements OnInit {
    employees: Employee[] = [];
    constructor(private employeeService: EmployeesService) {}

    deleteEmployee(id: any) {
        this.employeeService.deleteEmployee(id).subscribe();
        this.employees = this.employees.filter((value) => {
            return value.id != id;
        });
    }

    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe((employees) => {
            this.employees = employees;
        });
    }
}
