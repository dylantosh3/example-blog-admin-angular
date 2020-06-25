import { Users } from './users';
import { UsersFilter } from './users-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class UsersService {
  usersList: Users[] = [];
  api = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Users> {
    const url = `${this.api}/${id}`;
    const params = { id };
    return this.http.get<Users>(url, {params, headers});
  }

  load(filter: UsersFilter): void {
    this.find(filter).subscribe(result => {
        this.usersList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: UsersFilter): Observable<Users[]> {
    const params = {
      id: filter.id,
    };

    return this.http.get<Users[]>(this.api, {params, headers});
  }

  save(entity: Users): Observable<Users> {
    let params = new HttpParams();
    let url: string;
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Users>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Users>(url, entity, {headers, params});
    }
  }

  delete(entity: Users): Observable<Users> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Users>(url, {headers, params});
    }
    return null;
  }
}

