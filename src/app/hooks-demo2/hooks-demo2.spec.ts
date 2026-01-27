import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksDemo2 } from './hooks-demo2';

describe('HooksDemo2', () => {
  let component: HooksDemo2;
  let fixture: ComponentFixture<HooksDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksDemo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksDemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
