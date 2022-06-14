import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesComponent} from "./components/employees.component";
import {EmployeesRoutingModule} from "./employees-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {EmployeesResolve} from "./resolvers/employees.resolve";
import {employeesService} from "./services/employees.service";

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    EmployeesResolve,
    employeesService
  ]
})
export class EmployeesModule { }
