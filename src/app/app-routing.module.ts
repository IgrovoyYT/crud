import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsModule} from "./modules/departments/departments.module";
import {EmployeesModule} from "./modules/employees/employees.module";
import {DepartmentsResolve} from "./modules/departments/resolvers/departments.resolve";

const routes: Routes = [
  {
    path: 'department',
    loadChildren: () => import('./modules/departments/departments.module').then(m => m.DepartmentsModule),
  },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: '',
    redirectTo: 'department',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
