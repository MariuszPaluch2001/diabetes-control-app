import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishRowComponent } from './dish-row.component';

describe('DishRowComponent', () => {
  let component: DishRowComponent;
  let fixture: ComponentFixture<DishRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishRowComponent]
    });
    fixture = TestBed.createComponent(DishRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
