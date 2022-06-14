import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Department} from "../interfaces/departments.interface";
import {Observable} from "rxjs";
import {DepartmentsService} from "../services/departments.service";

@Injectable()

export class DepartmentByIdResolve implements Resolve<Observable<Department>> {

  constructor(private departmentsService: DepartmentsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Department> {
    const id = route.params['id']
    return this.departmentsService.getById(id);
  }

}
