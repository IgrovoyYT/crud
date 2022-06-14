import {InMemoryDbService} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";
import {Department} from "./modules/departments/interfaces/departments.interface";
import {Employee} from "./modules/employees/interfaces/employees.interface";

@Injectable(
  { providedIn: 'root' }
)

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    const departments: Department[] = [
      {
        id: 1,
        name: 'Бухгалтерия',
        description: 'Buy Groceries'
      },
      {
        id: 2,
        name: 'Отдел кадров',
        description: 'Paint the garage'
      }
    ]
    const employees: Employee[] = [
      {
        id: 1,
        departmentId: 1,
        name: 'Максим',
        description: ''
      },
      {
        id: 2,
        departmentId: 1,
        name: 'Микита',
        description: 'Paint the garage'
      },
      {
        id: 3,
        departmentId: 2,
        name: 'Ілля',
        description: 'Paint the garage'
      }
    ]

    return {departments, employees};
  }

  genId(array: any): number {
    return array.length > 0 ? Math.max(...array.map((value: any) => value.id)) + 1 : 11;
  }

}
