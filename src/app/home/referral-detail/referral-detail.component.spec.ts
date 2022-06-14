import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralDetailComponent } from './referral-detail.component';

describe('ReferralDetailComponent', () => {
  let component: ReferralDetailComponent;
  let fixture: ComponentFixture<ReferralDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
