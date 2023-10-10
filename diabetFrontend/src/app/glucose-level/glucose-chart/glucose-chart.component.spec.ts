import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseChartComponent } from './glucose-chart.component';

describe('GlucoseChartComponent', () => {
  let component: GlucoseChartComponent;
  let fixture: ComponentFixture<GlucoseChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseChartComponent]
    });
    fixture = TestBed.createComponent(GlucoseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
