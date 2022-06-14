import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../interfaces/employees.interface";

@Injectable()

export class employeesService {
  constructor(private http: HttpClient) {
  }

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>('api/employees')
  }
}
