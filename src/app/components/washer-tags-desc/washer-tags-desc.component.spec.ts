import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherTagsDescComponent } from './washer-tags-desc.component';

describe('WasherTagsDescComponent', () => {
  let component: WasherTagsDescComponent;
  let fixture: ComponentFixture<WasherTagsDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherTagsDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherTagsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
