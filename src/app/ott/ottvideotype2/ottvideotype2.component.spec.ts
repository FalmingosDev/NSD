import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ottvideotype2Component } from './ottvideotype2.component';

describe('Ottvideotype2Component', () => {
  let component: Ottvideotype2Component;
  let fixture: ComponentFixture<Ottvideotype2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ottvideotype2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ottvideotype2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
