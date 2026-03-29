import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-trigger',
  templateUrl: './accordion-trigger.component.html',
  styleUrls: ['./accordion-trigger.component.css'],
})
export class AccordionTriggerComponent {
  @Input() className: string = '';
  @Input() isOpen: boolean = false;
}
