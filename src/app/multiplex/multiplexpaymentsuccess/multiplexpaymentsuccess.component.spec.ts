import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexpaymentsuccessComponent } from './multiplexpaymentsuccess.component';

describe('MultiplexpaymentsuccessComponent', () => {
  let component: MultiplexpaymentsuccessComponent;
  let fixture: ComponentFixture<MultiplexpaymentsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexpaymentsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexpaymentsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
