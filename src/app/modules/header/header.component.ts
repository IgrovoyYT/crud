import {Component, OnInit} from '@angular/core';
import {takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";

import {Department} from "../departments/interfaces/departments.interface";
import {UnsubscriberComponent} from "../../shared/helpers/unsubscriber.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent extends UnsubscriberComponent implements OnInit {
  departments: Department[] = []

  constructor(private route: ActivatedRoute) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.route.data.pipe(takeUntil(this.$destroy)).subscribe({
      next: (value: any) => {
        this.departments = value.departments
      }
    })
  }
}
