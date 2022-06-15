import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {takeUntil} from "rxjs";

import {Employee} from "../interfaces/employees.interface";
import {UnsubscriberComponent} from "../../../shared/helpers/unsubscriber.component";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent extends UnsubscriberComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource: MatTableDataSource<Employee[]> = new MatTableDataSource<Employee[]>()
  activeDepartmentId: number = 0

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute) {
    super()
  }

  ngOnInit(): void {
    this.get()
    this.subscribeOnRouteQueryParams()
  }

  get(): void {
    this.route.parent?.parent?.data
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (value: any) => this.dataSource = new MatTableDataSource<Employee[]>(value.employees)
      })
  }

  ngAfterViewInit(): void {
    this.initPagination()
    this.initSort()
  }

  initPagination(): void {
    this.dataSource.paginator = this.paginator;
  }

  initSort(): void {
    this.dataSource.sort = this.sort;
  }

  subscribeOnRouteQueryParams(): void {
    this.route.queryParams
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (value: any) => this.activeDepartmentId = value?.departmentId
      })
  }

}
