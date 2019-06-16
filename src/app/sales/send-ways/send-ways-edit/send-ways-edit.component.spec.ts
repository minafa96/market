import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWaysEditComponent } from './send-ways-edit.component';

describe('SendWaysEditComponent', () => {
  let component: SendWaysEditComponent;
  let fixture: ComponentFixture<SendWaysEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendWaysEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendWaysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
