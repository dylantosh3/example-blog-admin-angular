import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommentsEditComponent } from './comments-edit.component';
import { CommentsService } from '../comments.service';

describe('CommentsEditComponent', () => {
  let component: CommentsEditComponent;
  let fixture: ComponentFixture<CommentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CommentsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
