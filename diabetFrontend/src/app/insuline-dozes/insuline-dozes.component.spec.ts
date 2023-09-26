import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulineDozesComponent } from './insuline-dozes.component';

describe('InsulineDozesComponent', () => {
  let component: InsulineDozesComponent;
  let fixture: ComponentFixture<InsulineDozesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsulineDozesComponent]
    });
    fixture = TestBed.createComponent(InsulineDozesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
