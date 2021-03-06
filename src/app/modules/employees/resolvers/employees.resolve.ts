import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs";

import {Employee} from "../interfaces/employees.interface";
import {EmployeesService} from "../services/employees.service";

@Injectable()

export class EmployeesResolve implements Resolve<Observable<Employee[]>> {

  constructor(private employeesService: EmployeesService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Employee[]> {
    const params = route.queryParams

    return this.employeesService.get(params);
  }

}
