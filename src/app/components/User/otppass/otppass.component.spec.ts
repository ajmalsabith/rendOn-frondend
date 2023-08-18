import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtppassComponent } from './otppass.component';

describe('OtppassComponent', () => {
  let component: OtppassComponent;
  let fixture: ComponentFixture<OtppassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtppassComponent]
    });
    fixture = TestBed.createComponent(OtppassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
