import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmakersHomeComponent } from './formmakers-home.component';

describe('FormmakersHomeComponent', () => {
  let component: FormmakersHomeComponent;
  let fixture: ComponentFixture<FormmakersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmakersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmakersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
