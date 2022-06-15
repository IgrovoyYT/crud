import {InMemoryDbService} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";

import {Department} from "./modules/departments/interfaces/departments.interface";
import {Employee} from "./modules/employees/interfaces/employees.interface";

@Injectable({
  providedIn: 'root'
})

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    const departments: Department[] = [
      {id: 1, name: 'Office', description: 'Office description'},
      {id: 2, name: 'Guard', description: 'Guard description'},
      {id: 3, name: 'Accounting', description: 'Accounting description'}
    ]
    const employees: Employee[] = [
      {id: 1, departmentId: 1, name: 'Maxim', description: 'Maxim description'},
      {id: 2, departmentId: 1, name: 'Nikita', description: 'Mykyta description'},
      {id: 3, departmentId: 2, name: 'Ilya', description: 'Ilya description'}
    ]

    return {departments, employees};
  }

  genId(array: any): number {
    return array.length > 0 ? Math.max(...array.map((value: any) => value.id)) + 1 : 11;
  }

}
