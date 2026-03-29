import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTriggerComponent } from './accordion-trigger.component';

describe('AccordionTriggerComponent', () => {
  let component: AccordionTriggerComponent;
  let fixture: ComponentFixture<AccordionTriggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionTriggerComponent]
    });
    fixture = TestBed.createComponent(AccordionTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
