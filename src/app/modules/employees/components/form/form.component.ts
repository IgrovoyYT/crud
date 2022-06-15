import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {expand, of, takeUntil, takeWhile, filter, pluck} from "rxjs";

import {UnsubscriberComponent} from "../../../../shared/helpers/unsubscriber.component";
import {Department} from "../../../departments/interfaces/departments.interface";
import {EmployeesService} from "../../services/employees.service";
import {Employee, EmployeeClass} from "../../interfaces/employees.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent extends UnsubscriberComponent implements OnInit {

  // @ts-ignore
  form: FormGroup
  // @ts-ignore
  departments: Department[]

  constructor(
    private employeesService: EmployeesService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  create(): void {
    this.employeesService.create(this.form.value)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        complete: () => {
          this.navigateTo()
          this.openSnackBar('Created!')
        }
      })
  }

  update(id: number): void {
    this.employeesService.update(id, this.form.value)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        complete: () => {
          this.navigateTo()
          this.openSnackBar('Updated!')
        }
      })
  }

  save(): void {
    const id = this.form.value?.id
    if (id) {
      this.update(id)
    } else {
      this.create()
    }
  }

  get(): void {
    of(this.route)
      .pipe(takeUntil(this.$destroy),
        expand(route => of(route?.['parent'])),
        takeWhile(route => !!route?.parent),
        pluck('snapshot', 'data'),
        filter((item: any) => !!item?.employee || !!item?.departments),
      )
      .subscribe({
        next: (value: any) => {
          if (value.departments) {
            this.departments = value.departments
          }
          if (!this.form?.value) {
            this.initForm(value['employee'])
          }
        }
      })
  }

  navigateTo(): void {
    this.router.navigate(['/employees'], {
      queryParamsHandling: "merge"
    })
  }

  initForm(employee: Employee = new EmployeeClass()): void {
    this.form = this.fb.group(employee)
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, '', {
      duration: 2000
    });
  }

}
