import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html'
})
export class UsersEditComponent implements OnInit {

  id: string;
  users: Users;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Users()); }
          return this.usersService.findById(id);
        })
      )
      .subscribe(users => {
          this.users = users;
          this.feedback = {};
        },
        () => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.usersService.save(this.users).subscribe(
      users => {
        this.users = users;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 1000);
      },
      () => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
