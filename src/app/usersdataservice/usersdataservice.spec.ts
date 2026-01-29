import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersdataservice } from './usersdataservice';

describe('Usersdataservice', () => {
  let component: Usersdataservice;
  let fixture: ComponentFixture<Usersdataservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersdataservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersdataservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
