import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttcneComponent } from './ottcne.component';

describe('OttcneComponent', () => {
  let component: OttcneComponent;
  let fixture: ComponentFixture<OttcneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttcneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttcneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
