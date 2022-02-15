import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoclanMultiplexComponent } from './newoclan-multiplex.component';

describe('NewoclanMultiplexComponent', () => {
  let component: NewoclanMultiplexComponent;
  let fixture: ComponentFixture<NewoclanMultiplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewoclanMultiplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoclanMultiplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
