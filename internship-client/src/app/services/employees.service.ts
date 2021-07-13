import { Employee } from '../Employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.apiUrl);
  }
}
