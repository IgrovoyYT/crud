import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {DepartmentsService} from "../services/departments.service";
import {Department} from "../interfaces/departments.interface";

@Injectable()

export class DepartmentsResolve implements Resolve<Observable<Department[]>> {
  constructor(private LogicService: DepartmentsService) {
  }
  resolve(): Observable<Department[]> {
    return this.LogicService.get();
  }

}
