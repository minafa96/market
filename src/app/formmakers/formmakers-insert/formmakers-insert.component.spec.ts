import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmakersInsertComponent } from './formmakers-insert.component';

describe('FormmakersInsertComponent', () => {
  let component: FormmakersInsertComponent;
  let fixture: ComponentFixture<FormmakersInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmakersInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmakersInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
