import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmakersEditComponent } from './formmakers-edit.component';

describe('FormmakersEditComponent', () => {
  let component: FormmakersEditComponent;
  let fixture: ComponentFixture<FormmakersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmakersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmakersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
