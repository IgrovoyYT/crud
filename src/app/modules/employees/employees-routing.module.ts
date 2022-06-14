import { NgModule } from '@angular/core';
import {EmployeesComponent} from "./components/employees.component";
import {RouterModule, Routes} from "@angular/router";
import {EmployeesResolve} from "./resolvers/employees.resolve";

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    resolve: {
      employees: EmployeesResolve
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
