import { Articles } from './articles';
import { ArticlesFilter } from './articles-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ArticlesService {
  articlesList: Articles[] = [];
  api = 'http://localhost:8080/api/articles';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Articles> {
    const url = `${this.api}/${id}`;
    const params = { id };
    return this.http.get<Articles>(url, {params, headers});
  }

  load(filter: ArticlesFilter): void {
    this.find(filter).subscribe(result => {
        this.articlesList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: ArticlesFilter): Observable<Articles[]> {
    const params = {
      username: filter.username,
    };

    return this.http.get<Articles[]>(this.api, {params, headers});
  }

  save(entity: Articles): Observable<Articles> {
    let params = new HttpParams();
    let url: string;
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Articles>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Articles>(url, entity, {headers, params});
    }
  }

  delete(entity: Articles): Observable<Articles> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Articles>(url, {headers, params});
    }
    return null;
  }
}

