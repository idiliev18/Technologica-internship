import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/Employee';
import { keyframes } from '@angular/animations';

@Component({
    selector: 'app-table-css',
    templateUrl: './table-css.component.html',
    styleUrls: ['./table-css.component.css'],
})
export class TableCssComponent implements OnInit {
    employees: Employee[] = [];

    header = {
        id: 'Id↑', //↑
        firstName: 'First name',
        surname: 'Surname',
        lastName: 'Last name',
        gender: 'Gender',
        age: 'Age',
        salary: 'Salary',
        position: 'Position',
        yearOfAppointment: 'Year of appointment',
        totalHolidays: 'Total holidays',
        remainingHolidays: 'Remaining holidays',
        sort: 'id',
        order: '↑'
    };

    constructor(private employeeService: EmployeesService) {}

    sortEmployees(field: string) {

        // Checks if there are elements in the array
        if (this.employees.length == 0) {
            return;
        }

        if (this.header.sort != field) {
            this.header.order = '↓';
        }

        let e = this.employees[0] as any;

        (this.header as any)[this.header.sort] = (this.header as any)[this.header.sort].slice(0, -1);
        this.header.sort = field;

        if (typeof e[field] === 'string') {
            if (this.header.order == '↑') {
                this.employees.sort((a, b) =>
                    (b as any)[field].localeCompare((a as any)[field])
                );

                this.header.order = '↓';
            } else {
                this.employees.sort((a, b) =>
                    (a as any)[field].localeCompare((b as any)[field])
                );

                this.header.order = '↑';
            }
        } else {
            if (this.header.order == '↑') {
                this.employees.sort(
                    (a, b) => (b as any)[field] - (a as any)[field]
                );
                this.header.order = '↓';
            } else {
                this.employees.sort(
                    (a, b) => (a as any)[field] - (b as any)[field]
                );
                this.header.order = '↑';
            }
        }

        (this.header as any)[field] = (this.header as any)[field] + this.header.order;
    }

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
