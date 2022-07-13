import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptcampaignbeforeComponent } from './acceptcampaignbefore.component';

describe('AcceptcampaignbeforeComponent', () => {
  let component: AcceptcampaignbeforeComponent;
  let fixture: ComponentFixture<AcceptcampaignbeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptcampaignbeforeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptcampaignbeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
