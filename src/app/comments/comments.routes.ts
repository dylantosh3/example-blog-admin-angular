import { Routes } from '@angular/router';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsEditComponent } from './comments-edit/comments-edit.component';

export const COMMENTS_ROUTES: Routes = [
  {
    path: 'comments',
    component: CommentsListComponent
  },
  {
    path: 'comments/:id',
    component: CommentsEditComponent
  }
];
