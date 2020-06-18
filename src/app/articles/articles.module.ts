import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { ArticlesService } from './articles.service';
import { ARTICLES_ROUTES } from './articles.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ARTICLES_ROUTES),
    NgbModule
  ],
  declarations: [
    ArticlesListComponent,
    ArticlesEditComponent
  ],
  providers: [ArticlesService],
  exports: []
})
export class ArticlesModule { }
