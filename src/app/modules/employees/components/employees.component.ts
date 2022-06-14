import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Employee} from "../interfaces/employees.interface";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'departmentId', 'name', 'description'];
  dataSource: Employee[] = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.route.data.subscribe({
      next: (value: any) => {
        this.dataSource = value.employees
      }
    })
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

}
