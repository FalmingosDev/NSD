import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexpaymentComponent } from './multiplexpayment.component';

describe('MultiplexpaymentComponent', () => {
  let component: MultiplexpaymentComponent;
  let fixture: ComponentFixture<MultiplexpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
