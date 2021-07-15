import { Employee } from '../Employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'https://localhost:5001/api/Employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.apiUrl);
  }

  deleteEmployee(id: any): Observable<Employee[]>{
        return this.http.delete<Employee[]>(this.apiUrl + `/${id}`);
  }

  deleteAllEmployees(): Observable<Employee[]>{
      return this.http.delete<Employee[]>(this.apiUrl);
  }

}
