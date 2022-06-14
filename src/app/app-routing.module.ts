import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsModule} from "./departments/departments.module";
import {EmployeesModule} from "./employees/employees.module";

const routes: Routes = [
  {
    path: 'department',
    loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: '**',
    redirectTo: 'department',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
