import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantiesEditComponent } from './warranties-edit.component';

describe('WarrantiesEditComponent', () => {
  let component: WarrantiesEditComponent;
  let fixture: ComponentFixture<WarrantiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
