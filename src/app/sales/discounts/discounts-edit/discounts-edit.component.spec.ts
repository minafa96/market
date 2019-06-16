import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsEditComponent } from './discounts-edit.component';

describe('DiscountsEditComponent', () => {
  let component: DiscountsEditComponent;
  let fixture: ComponentFixture<DiscountsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
