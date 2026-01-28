import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mostlike } from './mostlike';

describe('Mostlike', () => {
  let component: Mostlike;
  let fixture: ComponentFixture<Mostlike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mostlike]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mostlike);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
