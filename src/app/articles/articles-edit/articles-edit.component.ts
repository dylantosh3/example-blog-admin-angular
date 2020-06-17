import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Articles } from '../articles';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html'
})
export class ArticlesEditComponent implements OnInit {

  id: string;
  articles: Articles;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Articles()); }
          return this.articlesService.findById(id);
        })
      )
      .subscribe(articles => {
          this.articles = articles;
          this.feedback = {};
        },
        () => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.articlesService.save(this.articles).subscribe(
      articles => {
        this.articles = articles;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/articles']);
        }, 1000);
      },
      () => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/articles']);
  }
}
