import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorcontentdetailsComponent } from './creatorcontentdetails.component';

describe('CreatorcontentdetailsComponent', () => {
  let component: CreatorcontentdetailsComponent;
  let fixture: ComponentFixture<CreatorcontentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorcontentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorcontentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
