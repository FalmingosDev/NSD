import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftartComponent } from './nftart.component';

describe('NftartComponent', () => {
  let component: NftartComponent;
  let fixture: ComponentFixture<NftartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
