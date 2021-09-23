import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubbmissionComponent } from './usersubbmission.component';

describe('UsersubbmissionComponent', () => {
  let component: UsersubbmissionComponent;
  let fixture: ComponentFixture<UsersubbmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersubbmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersubbmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
