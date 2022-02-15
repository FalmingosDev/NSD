import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewostreetComponent } from './newostreet.component';

describe('NewostreetComponent', () => {
  let component: NewostreetComponent;
  let fixture: ComponentFixture<NewostreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewostreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewostreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
