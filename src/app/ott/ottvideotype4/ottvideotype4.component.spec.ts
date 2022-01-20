import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ottvideotype4Component } from './ottvideotype4.component';

describe('Ottvideotype4Component', () => {
  let component: Ottvideotype4Component;
  let fixture: ComponentFixture<Ottvideotype4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ottvideotype4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ottvideotype4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
