import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSupplyComponent } from './change-supply.component';

describe('ChangeSupplyComponent', () => {
  let component: ChangeSupplyComponent;
  let fixture: ComponentFixture<ChangeSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
