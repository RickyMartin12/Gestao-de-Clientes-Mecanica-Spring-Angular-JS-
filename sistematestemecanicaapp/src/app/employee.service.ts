import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServiceUrl = 'https://employee-crud-spring-boot.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any> {
      return this.http.get<any> (`${this.apiServiceUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee>
  {
      return this.http.post<Employee> (`${this.apiServiceUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee>
  {
      return this.http.put<Employee> (`${this.apiServiceUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void>
  {
      return this.http.delete<void> (`${this.apiServiceUrl}/employee/delete/${employeeId}`);
  }
}
