import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {EmployeesComponent} from "./components/employees.component";
import {FormComponent} from "./components/form/form.component";
import {EmployeeByIdResolve} from "./resolvers/employee-by-id.resolve";
import {DetailsComponent} from "./components/details/details.component";
import {DepartmentsResolve} from "../departments/resolvers/departments.resolve";
import {DepartmentByIdResolve} from "../departments/resolvers/department-by-id.resolve";

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'create',
    component: FormComponent,
    resolve: {
      departments: DepartmentsResolve
    }
  },
  {
    path: ':id',
    resolve: {
      employee: EmployeeByIdResolve,
      currentDepartment: DepartmentByIdResolve,
      departments: DepartmentsResolve
    },
    children: [
      {
        path: 'view',
        component: DetailsComponent
      },
      {
        path: 'edit',
        component: FormComponent
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule {
}
