import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMealFormComponent } from './save-form.component';

describe('SaveFormComponent', () => {
  let component: SaveMealFormComponent;
  let fixture: ComponentFixture<SaveMealFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveMealFormComponent]
    });
    fixture = TestBed.createComponent(SaveMealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
