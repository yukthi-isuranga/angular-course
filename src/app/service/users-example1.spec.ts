import { TestBed } from '@angular/core/testing';

import { UsersExample1 } from './users-example1';

describe('UsersExample1', () => {
  let service: UsersExample1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersExample1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
