import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

import {Department} from "../../interfaces/departments.interface";
import {Employee} from "../../../employees/interfaces/employees.interface";
import {UnsubscriberComponent} from "../../../../shared/helpers/unsubscriber.component";
import {DepartmentsService} from "../../services/departments.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})

export class DetailsComponent extends UnsubscriberComponent implements OnInit {

  // @ts-ignore
  department: Department
  // @ts-ignore
  employees: Employee[]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentsService: DepartmentsService,
    private _snackBar: MatSnackBar
  ) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.route.data.pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (value: any) => {
          this.department = value.department
          this.employees = value.currentEmployees || []
        }
      })
  }

  delete(): void {
    this.departmentsService.delete(this.department.id as number)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: () => {
          this.navigateTo()
          this.openSnackBar('Removed!')
        }
      })
  }

  navigateTo(): void {
    this.router.navigate(['/departments'])
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, '', {
      duration: 2000
    });
  }

}
