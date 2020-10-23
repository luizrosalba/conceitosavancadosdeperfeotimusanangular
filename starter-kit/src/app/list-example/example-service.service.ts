import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  users: () => `/produtos`,
};


@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient:HttpClient) { }


  ///CRUD 

  getUsers () {
    return this.httpClient.get(routes.users())
    .pipe(
      catchError(() => of('Error, could not load users'))
    );
  }

  
  deleteUsers () {
    return this.httpClient.delete(routes.users())
    .pipe(
      catchError(() => of('Error, could not load users'))
    );
  }



}
