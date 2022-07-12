import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralinviteComponent } from './referralinvite.component';

describe('ReferralinviteComponent', () => {
  let component: ReferralinviteComponent;
  let fixture: ComponentFixture<ReferralinviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralinviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
