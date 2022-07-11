import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexwishlistComponent } from './multiplexwishlist.component';

describe('MultiplexwishlistComponent', () => {
  let component: MultiplexwishlistComponent;
  let fixture: ComponentFixture<MultiplexwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexwishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
