import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDishFormComponent } from './save-form.component';

describe('SaveFormComponent', () => {
  let component: SaveDishFormComponent;
  let fixture: ComponentFixture<SaveDishFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveDishFormComponent]
    });
    fixture = TestBed.createComponent(SaveDishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
