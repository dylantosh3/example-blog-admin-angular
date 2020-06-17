import { Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';

export const ARTICLES_ROUTES: Routes = [
  {
    path: 'articles',
    component: ArticlesListComponent
  },
  {
    path: 'articles/:id',
    component: ArticlesEditComponent
  }
];
