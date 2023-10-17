import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulineListComponent } from './insuline-list.component';

describe('InsulineRowComponent', () => {
  let component: InsulineListComponent;
  let fixture: ComponentFixture<InsulineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsulineListComponent]
    });
    fixture = TestBed.createComponent(InsulineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
