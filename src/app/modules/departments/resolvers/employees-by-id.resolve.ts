import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Employee} from "../../employees/interfaces/employees.interface";
import {Observable} from "rxjs";
import {DepartmentsService} from "../services/departments.service";

@Injectable()

export class EmployeesByIdResolve implements Resolve<Observable<Employee[]>> {

  constructor(private departmentsService: DepartmentsService) {
  }

  resolve(route: ActivatedRouteSnapshot):Observable<Employee[]> {
    const id = route.params['id']
    return this.departmentsService.getEmployeesById(id);
  }

}
