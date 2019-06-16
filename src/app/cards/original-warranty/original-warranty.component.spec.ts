import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalWarrantyComponent } from './original-warranty.component';

describe('OriginalWarrantyComponent', () => {
  let component: OriginalWarrantyComponent;
  let fixture: ComponentFixture<OriginalWarrantyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalWarrantyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
