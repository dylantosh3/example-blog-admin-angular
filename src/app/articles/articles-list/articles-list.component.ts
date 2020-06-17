import { Component, OnInit } from '@angular/core';
import { ArticlesFilter } from '../articles-filter';
import { ArticlesService } from '../articles.service';
import { Articles } from '../articles';

@Component({
  selector: 'app-articles',
  templateUrl: 'articles-list.component.html'
})
export class ArticlesListComponent implements OnInit {

  filter = new ArticlesFilter();
  selectedArticles: Articles;
  feedback: any = {};

  get articlesList(): Articles[] {
    return this.articlesService.articlesList;
  }

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.articlesService.load(this.filter);
  }

  select(selected: Articles): void {
    this.selectedArticles = selected;
  }

  delete(articles: Articles): void {
    if (confirm('Are you sure?')) {
      this.articlesService.delete(articles).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        () => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
