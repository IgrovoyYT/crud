import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {DepartmentsService} from "../services/departments.service";
import {Department} from "../interfaces/departments.interface";

@Injectable()

export class DepartmentsResolve implements Resolve<Observable<Department[]>> {
  constructor(private departmentsService: DepartmentsService) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<Department[]> {
    const params = route.queryParams
    const unuseQueryParams = route.data["unuseQueryParams"]

    return this.departmentsService.get(unuseQueryParams ? {} : params);
  }

}
