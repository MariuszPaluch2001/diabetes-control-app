import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveGlucoseFormComponent } from './save-form.component';

describe('SaveFormComponent', () => {
  let component: SaveGlucoseFormComponent;
  let fixture: ComponentFixture<SaveGlucoseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveGlucoseFormComponent]
    });
    fixture = TestBed.createComponent(SaveGlucoseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
