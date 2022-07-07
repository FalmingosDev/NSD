import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplextendingComponent } from './multiplextending.component';

describe('MultiplextendingComponent', () => {
  let component: MultiplextendingComponent;
  let fixture: ComponentFixture<MultiplextendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplextendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplextendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
