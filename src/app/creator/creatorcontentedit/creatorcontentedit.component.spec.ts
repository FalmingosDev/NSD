import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorcontenteditComponent } from './creatorcontentedit.component';

describe('CreatorcontenteditComponent', () => {
  let component: CreatorcontenteditComponent;
  let fixture: ComponentFixture<CreatorcontenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorcontenteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorcontenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
