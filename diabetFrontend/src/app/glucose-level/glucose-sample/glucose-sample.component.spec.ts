import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseSampleComponent } from './glucose-sample.component';

describe('GlucoseSampleComponent', () => {
  let component: GlucoseSampleComponent;
  let fixture: ComponentFixture<GlucoseSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseSampleComponent]
    });
    fixture = TestBed.createComponent(GlucoseSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
