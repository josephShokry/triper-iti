import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripGrid } from './trip-grid';

describe('TripGrid', () => {
  let component: TripGrid;
  let fixture: ComponentFixture<TripGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
