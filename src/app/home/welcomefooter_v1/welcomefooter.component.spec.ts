import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomefooterComponent } from './welcomefooter.component';

describe('WelcomefooterComponent', () => {
  let component: WelcomefooterComponent;
  let fixture: ComponentFixture<WelcomefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomefooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
