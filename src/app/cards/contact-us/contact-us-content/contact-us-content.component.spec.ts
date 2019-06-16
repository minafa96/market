import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsContentComponent } from './contact-us-content.component';

describe('ContactUsContentComponent', () => {
  let component: ContactUsContentComponent;
  let fixture: ComponentFixture<ContactUsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
