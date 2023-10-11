import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulineChartComponent } from './insuline-chart.component';

describe('InsulineChartComponent', () => {
  let component: InsulineChartComponent;
  let fixture: ComponentFixture<InsulineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsulineChartComponent]
    });
    fixture = TestBed.createComponent(InsulineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
