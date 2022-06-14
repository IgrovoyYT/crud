import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DepartmentsComponent} from "./components/departments.component";
import {DepartmentsResolve} from "./resolvers/departments.resolve";
import {FormComponent} from "./components/form/form.component";
import {DetailsComponent} from "./components/details/details.component";
import {DepartmentByIdResolve} from "./resolvers/department-by-id.resolve";
import {EmployeesByIdResolve} from "./resolvers/employees-by-id.resolve";

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent,
    resolve: {
      departments: DepartmentsResolve
    }
  },
  {
    path: 'create',
    component: FormComponent
  },
  {
    path: ':id',
    resolve: {
      department: DepartmentByIdResolve,
      currentEmployees: EmployeesByIdResolve
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
