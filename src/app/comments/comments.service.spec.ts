import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CommentsService', () => {
  let service: CommentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentsService]
    });

    service = TestBed.get(CommentsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
