import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinascreatorComponent } from './joinascreator.component';

describe('JoinascreatorComponent', () => {
  let component: JoinascreatorComponent;
  let fixture: ComponentFixture<JoinascreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinascreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinascreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
