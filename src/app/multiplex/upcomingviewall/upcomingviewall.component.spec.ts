import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingviewallComponent } from './upcomingviewall.component';

describe('UpcomingviewallComponent', () => {
  let component: UpcomingviewallComponent;
  let fixture: ComponentFixture<UpcomingviewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingviewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
