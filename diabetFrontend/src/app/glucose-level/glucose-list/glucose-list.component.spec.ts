import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseListComponent } from './glucose-list.component';

describe('GlucoseRowComponent', () => {
  let component: GlucoseListComponent;
  let fixture: ComponentFixture<GlucoseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseListComponent]
    });
    fixture = TestBed.createComponent(GlucoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
