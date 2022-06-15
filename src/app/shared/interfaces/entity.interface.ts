import { Observable } from 'rxjs';

export interface EntityInterface<T> {
  // @ts-ignore
  get(...args): Observable<T[] | T>;
  // @ts-ignore
  getById(id: number | string, ...args): Observable<T>;
  // @ts-ignore
  delete(id: number | string, ...args): Observable<T>;
  // @ts-ignore
  create(body: Partial<T>, ...args): Observable<T>;
  // @ts-ignore
  update(id: number | string, body: Partial<T>, ...args): Observable<T>;
}
