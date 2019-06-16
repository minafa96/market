import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgWarrantyEditComponent } from './org-warranty-edit.component';

describe('OrgWarrantyEditComponent', () => {
  let component: OrgWarrantyEditComponent;
  let fixture: ComponentFixture<OrgWarrantyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgWarrantyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgWarrantyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
