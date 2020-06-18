import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsEditComponent } from './comments-edit/comments-edit.component';
import { CommentsService } from './comments.service';
import { COMMENTS_ROUTES } from './comments.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COMMENTS_ROUTES)
  ],
  declarations: [
    CommentsListComponent,
    CommentsEditComponent
  ],
  providers: [CommentsService],
  exports: []
})
export class CommentsModule { }
