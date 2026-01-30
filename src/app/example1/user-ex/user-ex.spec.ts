import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEx } from './user-ex';

describe('UserEx', () => {
  let component: UserEx;
  let fixture: ComponentFixture<UserEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
