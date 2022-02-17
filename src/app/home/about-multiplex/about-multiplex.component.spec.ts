import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMultiplexComponent } from './about-multiplex.component';

describe('AboutMultiplexComponent', () => {
  let component: AboutMultiplexComponent;
  let fixture: ComponentFixture<AboutMultiplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMultiplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMultiplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
