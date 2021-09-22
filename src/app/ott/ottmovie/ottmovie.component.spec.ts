import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttmovieComponent } from './ottmovie.component';

describe('OttmovieComponent', () => {
  let component: OttmovieComponent;
  let fixture: ComponentFixture<OttmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
