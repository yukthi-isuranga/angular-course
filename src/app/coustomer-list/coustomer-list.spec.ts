import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomerList } from './coustomer-list';

describe('CoustomerList', () => {
  let component: CoustomerList;
  let fixture: ComponentFixture<CoustomerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoustomerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoustomerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
