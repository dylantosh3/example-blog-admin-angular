import { Component, OnInit } from '@angular/core';
import { UsersFilter } from '../users-filter';
import { UsersService } from '../users.service';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: 'users-list.component.html'
})
export class UsersListComponent implements OnInit {

  filter = new UsersFilter();
  selectedUsers: Users;
  feedback: any = {};

  get usersList(): Users[] {
    return this.usersService.usersList;
  }

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.usersService.load(this.filter);
  }

  select(selected: Users): void {
    this.selectedUsers = selected;
  }

  delete(users: Users): void {
    if (confirm('Are you sure?')) {
      this.usersService.delete(users).subscribe(() => {
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
