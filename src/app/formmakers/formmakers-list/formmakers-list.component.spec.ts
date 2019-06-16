import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmakersListComponent } from './formmakers-list.component';

describe('FormmakersListComponent', () => {
  let component: FormmakersListComponent;
  let fixture: ComponentFixture<FormmakersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmakersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmakersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
