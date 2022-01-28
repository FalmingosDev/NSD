import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeheaderComponent } from './welcomeheader.component';

describe('WelcomeheaderComponent', () => {
  let component: WelcomeheaderComponent;
  let fixture: ComponentFixture<WelcomeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
