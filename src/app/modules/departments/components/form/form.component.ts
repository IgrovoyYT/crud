import {Component, OnInit} from '@angular/core';
import {Department, DepartmentClass} from "../../interfaces/departments.interface";
import {DepartmentsService} from "../../services/departments.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  // @ts-ignore
  form: FormGroup

  constructor(
    private departmentsService: DepartmentsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.get()
  }

  create(): void {
    this.departmentsService.create(this.form.value).subscribe({
      complete: () => this.navigateTo()
    })
  }

  update(id: number): void {
    this.departmentsService.update(id, this.form.value).subscribe({
      complete: () => this.navigateTo()
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
    this.route.data.subscribe({
      next: (value: any) => this.initForm(value.department)
    })
  }

  navigateTo(): void {
    this.router.navigate(['../'])
  }

  initForm(department: Department = new DepartmentClass()): void {
    this.form = this.fb.group(department)
  }

}
