import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttshortsComponent } from './ottshorts.component';

describe('OttshortsComponent', () => {
  let component: OttshortsComponent;
  let fixture: ComponentFixture<OttshortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttshortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttshortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
