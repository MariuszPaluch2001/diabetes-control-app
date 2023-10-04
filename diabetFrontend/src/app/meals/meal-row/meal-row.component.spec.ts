import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealRowComponent } from './meal-row.component';

describe('MealRowComponent', () => {
  let component: MealRowComponent;
  let fixture: ComponentFixture<MealRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealRowComponent]
    });
    fixture = TestBed.createComponent(MealRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
