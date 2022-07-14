import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtaguserprofileComponent } from './hashtaguserprofile.component';

describe('HashtaguserprofileComponent', () => {
  let component: HashtaguserprofileComponent;
  let fixture: ComponentFixture<HashtaguserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashtaguserprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtaguserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
