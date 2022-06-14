import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Employee} from "../interfaces/employees.interface";
import {Observable} from "rxjs";
import {employeesService} from "../services/employees.service";

@Injectable()

export class EmployeesResolve implements Resolve<Observable<Employee[]>> {

  constructor(private employeesService: employeesService) {
  }

  resolve(): Observable<Employee[]> {
    return this.employeesService.get();
  }

}
