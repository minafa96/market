import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersHomeComponent } from './sliders-home.component';

describe('SlidersHomeComponent', () => {
  let component: SlidersHomeComponent;
  let fixture: ComponentFixture<SlidersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
