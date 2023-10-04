import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSampleComponent } from './meal-sample.component';

describe('MealSampleComponent', () => {
  let component: MealSampleComponent;
  let fixture: ComponentFixture<MealSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealSampleComponent]
    });
    fixture = TestBed.createComponent(MealSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
