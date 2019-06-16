import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgWarrantyContentComponent } from './org-warranty-content.component';

describe('OrgWarrantyContentComponent', () => {
  let component: OrgWarrantyContentComponent;
  let fixture: ComponentFixture<OrgWarrantyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgWarrantyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgWarrantyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
