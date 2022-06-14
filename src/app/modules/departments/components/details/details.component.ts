import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Department} from "../../interfaces/departments.interface";
import {Employee} from "../../../employees/interfaces/employees.interface";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})

export class DetailsComponent implements OnInit {

  // @ts-ignore
  department: Department
  // @ts-ignore
  employees: Employee[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.route.data.subscribe({
      next: (value: any) => {
        this.department = value.department
        this.employees = value.currentEmployees || []
      }
    })
  }

}
