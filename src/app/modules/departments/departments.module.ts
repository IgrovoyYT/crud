import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";

import {DepartmentsComponent} from "./components/departments.component";
import {DepartmentsRoutingModule} from "./departments-routing.module";
import {FormComponent} from './components/form/form.component';
import {DetailsComponent} from './components/details/details.component';
import {DepartmentByIdResolve} from "./resolvers/department-by-id.resolve";

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
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [
    DepartmentByIdResolve,
  ]
})
export class DepartmentsModule {
}
