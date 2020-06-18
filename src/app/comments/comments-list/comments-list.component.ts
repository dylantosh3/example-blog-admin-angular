import { Component, OnInit } from '@angular/core';
import { CommentsFilter } from '../comments-filter';
import { CommentsService } from '../comments.service';
import { Comments } from '../comments';

@Component({
  selector: 'app-comments',
  templateUrl: 'comments-list.component.html'
})
export class CommentsListComponent implements OnInit {

  filter = new CommentsFilter();
  selectedComments: Comments;
  feedback: any = {};

  get commentsList(): Comments[] {
    return this.commentsService.commentsList;
  }

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.commentsService.load(this.filter);
  }

  select(selected: Comments): void {
    this.selectedComments = selected;
  }

  delete(comments: Comments): void {
    if (confirm('Are you sure?')) {
      this.commentsService.delete(comments).subscribe(() => {
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
