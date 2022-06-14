export interface Department {
  id?: number;
  name: string;
  description: string;
}

export class DepartmentClass implements Department{
  name: string = '';
  description: string = '';
}
