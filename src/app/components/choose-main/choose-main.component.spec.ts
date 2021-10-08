import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMainComponent } from './choose-main.component';

describe('ChooseMainComponent', () => {
  let component: ChooseMainComponent;
  let fixture: ComponentFixture<ChooseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
