import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypendingcampaignComponent } from './mypendingcampaign.component';

describe('MypendingcampaignComponent', () => {
  let component: MypendingcampaignComponent;
  let fixture: ComponentFixture<MypendingcampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypendingcampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypendingcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
