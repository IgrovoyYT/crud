export interface Employee {
  id?: number;
  departmentId: number;
  name: string;
  description: string
}

export class EmployeeClass implements Employee{
  departmentId: number = 0;
  description: string = '';
  name: string = '';
}
