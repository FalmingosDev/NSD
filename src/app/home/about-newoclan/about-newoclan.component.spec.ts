import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNewoclanComponent } from './about-newoclan.component';

describe('AboutNewoclanComponent', () => {
  let component: AboutNewoclanComponent;
  let fixture: ComponentFixture<AboutNewoclanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNewoclanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNewoclanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
