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

  getTasks(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.apiUrl);
  }
}
