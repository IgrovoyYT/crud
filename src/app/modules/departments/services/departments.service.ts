import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Department} from "../interfaces/departments.interface";
import {EntityInterface} from "../../../shared/interfaces/entity.interface";


@Injectable({
  providedIn: 'root'
})

export class DepartmentsService implements EntityInterface<Department>{

  urlDepartments: string = 'api/departments/'

  constructor(private http: HttpClient) {}

  get(params: any): Observable<Department[]> {
    return this.http.get<Department[]>(this.urlDepartments, {
      params
    })
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

}
