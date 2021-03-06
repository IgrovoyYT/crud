import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

import {Department, DepartmentClass} from "../../interfaces/departments.interface";
import {DepartmentsService} from "../../services/departments.service";
import {UnsubscriberComponent} from "../../../../shared/helpers/unsubscriber.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent extends UnsubscriberComponent implements OnInit {

  // @ts-ignore
  form: FormGroup

  constructor(
    private departmentsService: DepartmentsService,
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
    this.departmentsService.create(this.form.value)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        complete: () => {
          this.navigateTo()
          this.openSnackBar('Created!')
        }
      })
  }

  update(id: number): void {
    this.departmentsService.update(id, this.form.value)
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
    this.route.data
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (value: any) => this.initForm(value.department)
      })
  }

  navigateTo(): void {
    this.router.navigate(['../'])
  }

  initForm(department: Department = new DepartmentClass()): void {
    this.form = this.fb.group(department)
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, '', {
      duration: 2000
    });
  }

}
