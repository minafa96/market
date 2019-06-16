import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersInsertComponent } from './banners-insert.component';

describe('BannersInsertComponent', () => {
  let component: BannersInsertComponent;
  let fixture: ComponentFixture<BannersInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
