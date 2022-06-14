import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {ActivatedRoute} from "@angular/router";
import {Department} from "../interfaces/departments.interface";
import {DepartmentsService} from "../services/departments.service";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.less']
})
export class DepartmentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource: Department[] = [];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private DepartmentsService: DepartmentsService
              ) { }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.route.data.subscribe({
      next: (value:any) => this.dataSource = value.departments
    })
  }

  getById(): void {
    this.DepartmentsService.getById(1).subscribe({
      next: value => console.log(value)
    })
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

}
