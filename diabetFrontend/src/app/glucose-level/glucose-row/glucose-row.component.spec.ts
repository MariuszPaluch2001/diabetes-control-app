import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRowComponent } from './glucose-row.component';

describe('GlucoseRowComponent', () => {
  let component: GlucoseRowComponent;
  let fixture: ComponentFixture<GlucoseRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseRowComponent]
    });
    fixture = TestBed.createComponent(GlucoseRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
