import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "../interfaces/departments.interface";
import {Employee} from "../../employees/interfaces/employees.interface";

@Injectable()

export class DepartmentsService {

  urlDepartments: string = 'api/departments/'
  urlEmployees: string = 'api/employees/'


  constructor(private http: HttpClient) {}

  get(): Observable<Department[]> {
    return this.http.get<Department[]>(this.urlDepartments)
  }

  create(department: Department): Observable<Department> {
    return this.http.post<Department>(this.urlDepartments, department)
  }

  getById(id: number): Observable<Department> {
    return this.http.get<Department>(this.urlDepartments + id)
  }

  update( id: number, department: Department): Observable<Department> {
    return this.http.put<Department>(this.urlDepartments + id, department)
  }

  delete(id: number): Observable<Department> {
    return this.http.delete<Department>(this.urlDepartments + id)
  }

  getEmployeesById(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlEmployees, {
      params: {
        departmentId: id
      }
    })
  }

}
