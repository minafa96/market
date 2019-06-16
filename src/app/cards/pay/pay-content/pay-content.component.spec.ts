import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayContentComponent } from './pay-content.component';

describe('PayContentComponent', () => {
  let component: PayContentComponent;
  let fixture: ComponentFixture<PayContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
