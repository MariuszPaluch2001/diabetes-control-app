import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseLevelComponent } from './glucose-level.component';

describe('GlucoseLevelComponent', () => {
  let component: GlucoseLevelComponent;
  let fixture: ComponentFixture<GlucoseLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseLevelComponent]
    });
    fixture = TestBed.createComponent(GlucoseLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
