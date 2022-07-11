import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedwishlistComponent } from './recommendedwishlist.component';

describe('RecommendedwishlistComponent', () => {
  let component: RecommendedwishlistComponent;
  let fixture: ComponentFixture<RecommendedwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedwishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
