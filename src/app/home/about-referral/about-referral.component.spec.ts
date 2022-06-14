import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutReferralComponent } from './about-referral.component';

describe('AboutReferralComponent', () => {
  let component: AboutReferralComponent;
  let fixture: ComponentFixture<AboutReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutReferralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
