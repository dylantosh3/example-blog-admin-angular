import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { CommentsComponent } from './modules/comments/comments.component';
import { UsersComponent } from './modules/users/users.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CommentsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
