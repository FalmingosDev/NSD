import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ottvideotype5Component } from './ottvideotype5.component';

describe('Ottvideotype5Component', () => {
  let component: Ottvideotype5Component;
  let fixture: ComponentFixture<Ottvideotype5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ottvideotype5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ottvideotype5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
