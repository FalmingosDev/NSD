import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ottvideotype6Component } from './ottvideotype6.component';

describe('Ottvideotype6Component', () => {
  let component: Ottvideotype6Component;
  let fixture: ComponentFixture<Ottvideotype6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ottvideotype6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ottvideotype6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
