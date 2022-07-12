import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingsocialandaddressaddComponent } from './pendingsocialandaddressadd.component';

describe('PendingsocialandaddressaddComponent', () => {
  let component: PendingsocialandaddressaddComponent;
  let fixture: ComponentFixture<PendingsocialandaddressaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingsocialandaddressaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingsocialandaddressaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
