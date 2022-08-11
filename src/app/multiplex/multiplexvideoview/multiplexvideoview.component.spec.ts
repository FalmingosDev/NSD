import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexvideoviewComponent } from './multiplexvideoview.component';

describe('MultiplexvideoviewComponent', () => {
  let component: MultiplexvideoviewComponent;
  let fixture: ComponentFixture<MultiplexvideoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexvideoviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexvideoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
