import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ottvideotype1Component } from './ottvideotype1.component';

describe('Ottvideotype1Component', () => {
  let component: Ottvideotype1Component;
  let fixture: ComponentFixture<Ottvideotype1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ottvideotype1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ottvideotype1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
