import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtaghomeComponent } from './hashtaghome.component';

describe('HashtaghomeComponent', () => {
  let component: HashtaghomeComponent;
  let fixture: ComponentFixture<HashtaghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashtaghomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtaghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
