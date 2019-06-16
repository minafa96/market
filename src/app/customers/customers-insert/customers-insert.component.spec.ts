import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersInsertComponent } from './customers-insert.component';

describe('CustomersInsertComponent', () => {
  let component: CustomersInsertComponent;
  let fixture: ComponentFixture<CustomersInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
