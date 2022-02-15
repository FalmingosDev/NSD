import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdeskComponent } from './newsdesk.component';

describe('NewsdeskComponent', () => {
  let component: NewsdeskComponent;
  let fixture: ComponentFixture<NewsdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsdeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
