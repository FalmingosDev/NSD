import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttvideotypeComponent } from './ottvideotype.component';

describe('OttvideotypeComponent', () => {
  let component: OttvideotypeComponent;
  let fixture: ComponentFixture<OttvideotypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttvideotypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttvideotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
