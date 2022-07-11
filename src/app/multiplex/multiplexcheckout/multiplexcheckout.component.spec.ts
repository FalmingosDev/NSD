import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexcheckoutComponent } from './multiplexcheckout.component';

describe('MultiplexcheckoutComponent', () => {
  let component: MultiplexcheckoutComponent;
  let fixture: ComponentFixture<MultiplexcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexcheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
