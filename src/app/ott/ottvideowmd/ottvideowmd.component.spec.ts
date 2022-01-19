import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttvideowmdComponent } from './ottvideowmd.component';

describe('OttvideowmdComponent', () => {
  let component: OttvideowmdComponent;
  let fixture: ComponentFixture<OttvideowmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttvideowmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttvideowmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
