import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DepartmentsModule} from "./modules/departments/departments.module";
import {EmployeesModule} from "./modules/employees/employees.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {DepartmentsService} from "./modules/departments/services/departments.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {FakeBackendService} from "./fake-backend.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    DepartmentsModule,
    HttpClientModule,
    EmployeesModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
