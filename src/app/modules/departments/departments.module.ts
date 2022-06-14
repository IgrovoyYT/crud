import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentsComponent} from "./components/departments.component";
import {DepartmentsRoutingModule} from "./departments-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {DepartmentsResolve} from "./resolvers/departments.resolve";
import {DepartmentsService} from "./services/departments.service";
import {MatButtonModule} from "@angular/material/button";
import { FormComponent } from './components/form/form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './components/details/details.component';
import {DepartmentByIdResolve} from "./resolvers/department-by-id.resolve";
import {EmployeesByIdResolve} from "./resolvers/employees-by-id.resolve";

@NgModule({
  declarations: [
    DepartmentsComponent,
    FormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    DepartmentsResolve,
    DepartmentsService,
    DepartmentByIdResolve,
    EmployeesByIdResolve
  ]
})
export class DepartmentsModule { }
