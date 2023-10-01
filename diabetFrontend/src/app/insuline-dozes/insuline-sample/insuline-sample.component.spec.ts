import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulineSampleComponent } from './insuline-sample.component';

describe('InsulineSampleComponent', () => {
  let component: InsulineSampleComponent;
  let fixture: ComponentFixture<InsulineSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsulineSampleComponent]
    });
    fixture = TestBed.createComponent(InsulineSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
