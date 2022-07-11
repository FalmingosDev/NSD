import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallcampaignComponent } from './myallcampaign.component';

describe('MyallcampaignComponent', () => {
  let component: MyallcampaignComponent;
  let fixture: ComponentFixture<MyallcampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyallcampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyallcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
