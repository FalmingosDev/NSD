import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttvideodetailComponent } from './ottvideodetail.component';

describe('OttvideodetailComponent', () => {
  let component: OttvideodetailComponent;
  let fixture: ComponentFixture<OttvideodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttvideodetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttvideodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
