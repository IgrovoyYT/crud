import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Department} from "../interfaces/departments.interface";
import {catchError, Observable, of} from "rxjs";
import {DepartmentsService} from "../services/departments.service";

@Injectable()

export class DepartmentByIdResolve implements Resolve<Observable<Department | null>> {

  constructor(private departmentsService: DepartmentsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Department | null> {
    const id = route.queryParams['departmentId'] || route.params['id']
    return this.departmentsService.getById(id).pipe(
      catchError(() => of(null))
    );
  }

}
