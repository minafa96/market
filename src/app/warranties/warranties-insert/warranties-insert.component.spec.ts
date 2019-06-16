import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantiesInsertComponent } from './warranties-insert.component';

describe('WarrantiesInsertComponent', () => {
  let component: WarrantiesInsertComponent;
  let fixture: ComponentFixture<WarrantiesInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantiesInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantiesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
