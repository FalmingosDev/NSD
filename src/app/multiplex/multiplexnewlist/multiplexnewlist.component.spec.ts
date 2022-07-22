import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplexnewlistComponent } from './multiplexnewlist.component';

describe('MultiplexnewlistComponent', () => {
  let component: MultiplexnewlistComponent;
  let fixture: ComponentFixture<MultiplexnewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplexnewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplexnewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
