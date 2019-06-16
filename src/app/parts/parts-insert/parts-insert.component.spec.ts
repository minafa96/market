import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsInsertComponent } from './parts-insert.component';

describe('PartsInsertComponent', () => {
  let component: PartsInsertComponent;
  let fixture: ComponentFixture<PartsInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
