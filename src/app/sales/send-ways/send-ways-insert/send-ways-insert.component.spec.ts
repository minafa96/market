import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWaysInsertComponent } from './send-ways-insert.component';

describe('SendWaysInsertComponent', () => {
  let component: SendWaysInsertComponent;
  let fixture: ComponentFixture<SendWaysInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendWaysInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendWaysInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
