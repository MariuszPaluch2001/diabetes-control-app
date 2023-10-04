import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishSampleComponent } from './dish-sample.component';

describe('DishSampleComponent', () => {
  let component: DishSampleComponent;
  let fixture: ComponentFixture<DishSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishSampleComponent]
    });
    fixture = TestBed.createComponent(DishSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
