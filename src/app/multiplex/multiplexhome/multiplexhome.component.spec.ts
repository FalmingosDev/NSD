import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexhomeComponent } from './multiplexhome.component';

describe('MultiplexhomeComponent', () => {
  let component: MultiplexhomeComponent;
  let fixture: ComponentFixture<MultiplexhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
