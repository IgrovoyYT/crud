import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeaderComponent} from "./modules/header/header.component";
import {DepartmentsResolve} from "./modules/departments/resolvers/departments.resolve";
import {EmployeesResolve} from "./modules/employees/resolvers/employees.resolve";

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    resolve: {
      departments: DepartmentsResolve,
      employees: EmployeesResolve
    },
    runGuardsAndResolvers: 'always',
    data: {
      unuseQueryParams: true
    },
    children: [
      {
        path: 'departments',
        loadChildren: () => import('./modules/departments/departments.module').then(m => m.DepartmentsModule),
      },
      {
        path: 'employees',
        loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path: '',
        redirectTo: 'departments',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
