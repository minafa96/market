import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWaysListComponent } from './send-ways-list.component';

describe('SendWaysListComponent', () => {
  let component: SendWaysListComponent;
  let fixture: ComponentFixture<SendWaysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendWaysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendWaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
