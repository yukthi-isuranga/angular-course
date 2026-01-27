import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksDemo } from './hooks-demo';

describe('HooksDemo', () => {
  let component: HooksDemo;
  let fixture: ComponentFixture<HooksDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
