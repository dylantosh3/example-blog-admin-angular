import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersService } from './users.service';
import { USERS_ROUTES } from './users.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(USERS_ROUTES)
  ],
  declarations: [
    UsersListComponent,
    UsersEditComponent
  ],
  providers: [UsersService],
  exports: []
})
export class UsersModule { }
