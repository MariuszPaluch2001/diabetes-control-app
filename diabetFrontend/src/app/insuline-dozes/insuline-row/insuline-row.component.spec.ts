import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulineRowComponent } from './insuline-row.component';

describe('InsulineRowComponent', () => {
  let component: InsulineRowComponent;
  let fixture: ComponentFixture<InsulineRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsulineRowComponent]
    });
    fixture = TestBed.createComponent(InsulineRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
