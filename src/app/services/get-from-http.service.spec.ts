import { TestBed } from '@angular/core/testing';

import { GetFromHttpService } from './get-from-http.service';

describe('GetFromHttpService', () => {
  let service: GetFromHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFromHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
