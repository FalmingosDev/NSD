import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorcontentComponent } from './creatorcontent.component';

describe('CreatorcontentComponent', () => {
  let component: CreatorcontentComponent;
  let fixture: ComponentFixture<CreatorcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
