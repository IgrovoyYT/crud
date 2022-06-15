import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {takeUntil} from "rxjs";

import {Department} from "../interfaces/departments.interface";
import {UnsubscriberComponent} from "../../../shared/helpers/unsubscriber.component";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.less']
})
export class DepartmentsComponent extends UnsubscriberComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource: MatTableDataSource<Department[]> = new MatTableDataSource<Department[]>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
  ) {
    super()
  }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.route.parent?.parent?.data
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (value: any) => this.dataSource = new MatTableDataSource<Department[]>(value.departments)
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

}
