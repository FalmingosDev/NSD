import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargePaymentCancelComponent } from './recharge-payment-cancel.component';

describe('RechargePaymentCancelComponent', () => {
  let component: RechargePaymentCancelComponent;
  let fixture: ComponentFixture<RechargePaymentCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargePaymentCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargePaymentCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
