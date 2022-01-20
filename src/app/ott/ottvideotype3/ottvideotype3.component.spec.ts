import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ottvideotype3Component } from './ottvideotype3.component';

describe('Ottvideotype3Component', () => {
  let component: Ottvideotype3Component;
  let fixture: ComponentFixture<Ottvideotype3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ottvideotype3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ottvideotype3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
