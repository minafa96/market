import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersInsertComponent } from './sliders-insert.component';

describe('SlidersInsertComponent', () => {
  let component: SlidersInsertComponent;
  let fixture: ComponentFixture<SlidersInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidersInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
