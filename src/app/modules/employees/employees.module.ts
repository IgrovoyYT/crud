import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from "./components/employees.component";
import {EmployeesRoutingModule} from "./employees-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";

import {EmployeeByIdResolve} from "./resolvers/employee-by-id.resolve";
import {FormComponent} from './components/form/form.component';
import {DetailsComponent} from './components/details/details.component';
import {DepartmentByIdResolve} from "../departments/resolvers/department-by-id.resolve";

@NgModule({
  declarations: [
    EmployeesComponent,
    FormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [
    DepartmentByIdResolve,
    EmployeeByIdResolve,
  ]
})
export class EmployeesModule {
}
