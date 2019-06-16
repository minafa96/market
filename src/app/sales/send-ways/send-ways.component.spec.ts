import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWaysComponent } from './send-ways.component';

describe('SendWaysComponent', () => {
  let component: SendWaysComponent;
  let fixture: ComponentFixture<SendWaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendWaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
