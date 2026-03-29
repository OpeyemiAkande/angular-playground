import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css'],
})
export class AccordionContentComponent {
  @Input() className: string = '';
  @Input() isOpen: boolean = false;
}
