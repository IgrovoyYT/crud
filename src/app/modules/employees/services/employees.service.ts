import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Employee} from "../interfaces/employees.interface";
import {EntityInterface} from "../../../shared/interfaces/entity.interface";

@Injectable({
  providedIn: 'root'
})

export class EmployeesService implements EntityInterface<Employee> {

  urlEmployees: string = 'api/employees/'

  constructor(private http: HttpClient) {
  }

  get(params: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlEmployees, {
      params
    })
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.urlEmployees, employee)
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.urlEmployees + id)
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.urlEmployees + id, employee)
  }

  delete(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.urlEmployees + id)
  }

}
