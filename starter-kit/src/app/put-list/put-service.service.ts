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
export class PutService {
  constructor(private httpClient: HttpClient) {}

  ///CRUD

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }

  putUsers(user: Object): Observable<{}> {
    let id = user['id'];

    let body = '';
    for (let prop in user) {
      body += prop + '=' + user[prop] + '&';
    }

    //let body = `login=${login}&descricao=${descricao}&preco=${preco}&categoria_id=${categoria_id}`;
    return this.httpClient
      .patch(routes.users() + `/${id}`, body, httpOptions)
      .pipe(catchError(() => of('Error, could not load users')));
  }
}

// let login = user["login"];
// let node_id = user["node_id"];
// let avatar_url = user["avatar_url"];
// let gravatar_id = user["gravatar_id"];
// let url = user["url"];
// let html_url = user["html_url"];
// let followers_url = user["followers_url"];
// let following_url = user["following_url"];
// let gists_url = user["gists_url"];
// let starred_url = user["starred_url"];
// let subscriptions_url = user["subscriptions_url"];
// let repos_url = user["repos_url"];
// let organizations_url = user["organizations_url"];
// let events_url = user["events_url"];
// let received_events_url = user["received_events_url"];
// let type = user["type"];
// let site_admin = user["site_admin"];
// let vec = [];
