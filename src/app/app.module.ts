import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './modules/header/header.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {FakeBackendService} from "./fake-backend.service";
import {UnsubscriberComponent} from "./shared/helpers/unsubscriber.component";
import {DepartmentsResolve} from "./modules/departments/resolvers/departments.resolve";
import {EmployeesResolve} from "./modules/employees/resolvers/employees.resolve";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnsubscriberComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [
    DepartmentsResolve,
    EmployeesResolve],
  bootstrap: [AppComponent]
})
export class AppModule {
}
