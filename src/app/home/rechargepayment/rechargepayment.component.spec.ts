import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargepaymentComponent } from './rechargepayment.component';

describe('RechargepaymentComponent', () => {
  let component: RechargepaymentComponent;
  let fixture: ComponentFixture<RechargepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
