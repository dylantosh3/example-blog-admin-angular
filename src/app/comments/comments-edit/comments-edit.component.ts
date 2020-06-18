import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommentsService } from '../comments.service';
import { Comments } from '../comments';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-comments-edit',
  templateUrl: './comments-edit.component.html'
})
export class CommentsEditComponent implements OnInit {

  id: string;
  comments: Comments;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentsService: CommentsService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Comments()); }
          return this.commentsService.findById(id);
        })
      )
      .subscribe(comments => {
          this.comments = comments;
          this.feedback = {};
        },
        () => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.commentsService.save(this.comments).subscribe(
      comments => {
        this.comments = comments;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/comments']);
        }, 1000);
      },
      () => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/comments']);
  }
}
