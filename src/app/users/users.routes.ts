import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

export const USERS_ROUTES: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/:id',
    component: UsersEditComponent
  }
];
