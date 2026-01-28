import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custappstyle } from './custappstyle';

describe('Custappstyle', () => {
  let component: Custappstyle;
  let fixture: ComponentFixture<Custappstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Custappstyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Custappstyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
