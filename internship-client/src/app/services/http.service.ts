import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getRequest(url: string): Observable<any> {
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  postRequest(url: string, data: any, option?: any): Observable<any> {
    return this.http.post(url, data, option).pipe(catchError(this.handleError));
  }

  updateRequest(url: string, data: any, option?: any) {
    return this.http.put(url, data, option).pipe(catchError(this.handleError));
  }

  deleteRequest(url: string) {
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('A wild error has appeared: ', error.error);
    } else {
      console.error(
        `API returned code ${error.status}, body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
