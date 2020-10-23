import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const routes = {
  users: () => `/produtos`,
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DeleteService {

  constructor(private httpClient:HttpClient) { }


  ///CRUD 

  getUsers () {
    return this.httpClient.get(routes.users())
    .pipe(
      catchError(() => of('Error, could not load users'))
    );
  }

  deleteUsers(id: number): Observable<{}> {
     return this.httpClient.delete(routes.users()+`/${id}`, httpOptions)
      .pipe(
        catchError(() => of('Error, could not load users'))
      );
  }

}
