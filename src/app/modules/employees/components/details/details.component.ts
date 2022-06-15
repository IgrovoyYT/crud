import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {takeUntil} from "rxjs";

import {UnsubscriberComponent} from "../../../../shared/helpers/unsubscriber.component";
import {Department} from "../../../departments/interfaces/departments.interface";
import {Employee} from "../../interfaces/employees.interface";
import {EmployeesService} from "../../services/employees.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent extends UnsubscriberComponent implements OnInit {

  // @ts-ignore
  employee: Employee
  // @ts-ignore
  department: Department

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private router: Router,
    private _snackBar: MatSnackBar) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.route.data
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (value: any) => {
          this.employee = value.employee
          this.department = value.currentDepartment
        }
      })
  }

  delete(): void {
    this.employeesService.delete(this.employee.id as number)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        complete: () => {
          this.navigateTo()
          this.openSnackBar('Removed!')
        }
      })
  }

  navigateTo(): void {
    this.router.navigate(['/employees'])
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, '', {
      duration: 2000
    });
  }

}
