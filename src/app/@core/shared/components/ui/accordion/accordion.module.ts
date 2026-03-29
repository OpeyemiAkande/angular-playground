import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionTriggerComponent } from './accordion-trigger/accordion-trigger.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionTriggerComponent,
    AccordionContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionTriggerComponent,
    AccordionContentComponent,
  ],
})
export class AccordionModule {}
