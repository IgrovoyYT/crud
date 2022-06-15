import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {DepartmentsComponent} from "./components/departments.component";
import {FormComponent} from "./components/form/form.component";
import {DetailsComponent} from "./components/details/details.component";
import {DepartmentByIdResolve} from "./resolvers/department-by-id.resolve";
import {EmployeesResolve} from "../employees/resolvers/employees.resolve";

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent
  },
  {
    path: 'create',
    component: FormComponent
  },
  {
    path: ':id',
    resolve: {
      department: DepartmentByIdResolve,
      currentEmployees: EmployeesResolve
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
export class DepartmentsRoutingModule {
}
