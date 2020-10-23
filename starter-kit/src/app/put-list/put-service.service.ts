import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const routes = {
  users: () => `/produtos`,
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    
    //Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private httpClient:HttpClient) { }


  ///CRUD 

  getUsers () {
    return this.httpClient.get(routes.users())
    .pipe(
      catchError(() => of('Error, could not load users'))
    );
  }

  putUsers(user: Object): Observable<{}> {
    let id = user["id"];
    let nome = user["nome"];
    let descricao = user["descricao"];
    let preco = user["preco"];
    let categoria_id = user["categoria_id"];
    let body = `nome=${nome}&descricao=${descricao}&preco=${preco}&categoria_id=${categoria_id}`;
    return this.httpClient.put(routes.users()+`/${id}`,body, httpOptions)
     .pipe(
       catchError(() => of('Error, could not load users'))
     );
 }

}
