import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsectionComponent } from './paymentsection.component';

describe('PaymentsectionComponent', () => {
  let component: PaymentsectionComponent;
  let fixture: ComponentFixture<PaymentsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsectionComponent]
    });
    fixture = TestBed.createComponent(PaymentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
