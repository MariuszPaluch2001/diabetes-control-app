import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoggedInComponent } from './no-logged-in.component';

describe('NoLoggedInComponent', () => {
  let component: NoLoggedInComponent;
  let fixture: ComponentFixture<NoLoggedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoLoggedInComponent]
    });
    fixture = TestBed.createComponent(NoLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
