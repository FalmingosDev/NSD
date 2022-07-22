import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexpaymentcancelComponent } from './multiplexpaymentcancel.component';

describe('MultiplexpaymentcancelComponent', () => {
  let component: MultiplexpaymentcancelComponent;
  let fixture: ComponentFixture<MultiplexpaymentcancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexpaymentcancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexpaymentcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
