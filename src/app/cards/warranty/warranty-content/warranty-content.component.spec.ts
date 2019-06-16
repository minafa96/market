import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyContentComponent } from './warranty-content.component';

describe('WarrantyContentComponent', () => {
  let component: WarrantyContentComponent;
  let fixture: ComponentFixture<WarrantyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
