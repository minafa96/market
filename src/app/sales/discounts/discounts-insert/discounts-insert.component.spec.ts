import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsInsertComponent } from './discounts-insert.component';

describe('DiscountsInsertComponent', () => {
  let component: DiscountsInsertComponent;
  let fixture: ComponentFixture<DiscountsInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountsInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
