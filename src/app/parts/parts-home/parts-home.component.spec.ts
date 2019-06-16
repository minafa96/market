import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsHomeComponent } from './parts-home.component';

describe('PartsHomeComponent', () => {
  let component: PartsHomeComponent;
  let fixture: ComponentFixture<PartsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
