import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorcontentaddComponent } from './creatorcontentadd.component';

describe('CreatorcontentaddComponent', () => {
  let component: CreatorcontentaddComponent;
  let fixture: ComponentFixture<CreatorcontentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorcontentaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorcontentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
