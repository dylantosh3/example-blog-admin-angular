import { Comments } from './comments';
import { CommentsFilter } from './comments-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CommentsService {
  commentsList: Comments[] = [];
  api = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Comments> {
    const url = `${this.api}/${id}`;
    const params = { id };
    return this.http.get<Comments>(url, {params, headers});
  }

  load(filter: CommentsFilter): void {
    this.find(filter).subscribe(result => {
        this.commentsList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: CommentsFilter): Observable<Comments[]> {
    const params = {
      articlesid: filter.articlesid,
    };

    return this.http.get<Comments[]>(this.api, {params, headers});
  }

  save(entity: Comments): Observable<Comments> {
    let params = new HttpParams();
    let url: string;
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Comments>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Comments>(url, entity, {headers, params});
    }
  }

  delete(entity: Comments): Observable<Comments> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Comments>(url, {headers, params});
    }
    return null;
  }
}

