import { TestBed } from '@angular/core/testing';

import { Userslog } from './userslog';

describe('Userslog', () => {
  let service: Userslog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Userslog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
