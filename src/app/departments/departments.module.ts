import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentsComponent} from "./departments.component";
import {DepartmentsRoutingModule} from "./departments-routing.module";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    DepartmentsComponent
  ],
    imports: [
        CommonModule,
        DepartmentsRoutingModule,
        MatTableModule
    ]
})
export class DepartmentsModule { }
