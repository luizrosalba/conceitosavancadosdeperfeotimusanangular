import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const routes = {
  users: () => `/users`,
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',

    //Authorization: 'my-auth-token'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  ///CRUD

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }

  postUsers(user: Object): Observable<{}> {
    let nome = user['nome'];
    let descricao = user['descricao'];
    let preco = user['preco'];
    let categoria_id = user['categoria_id'];
    let body = `nome=${nome}&descricao=${descricao}&preco=${preco}&categoria_id=${categoria_id}`;

    return this.httpClient
      .post(routes.users(), body, httpOptions)
      .pipe(catchError(() => of('Error, could not load users')));
  }
}

// let grant_type = 'password';
// let username = 'varejo_user';
// let password = 'w6h5xgtl';
// let body = `grant_type=${grant_type}&username=${username}&password=${password}`;

// return this.http.post(`${ApiDeSegurança}`, body, new RequestOptions({headers: header})).map(response=> response.json())
