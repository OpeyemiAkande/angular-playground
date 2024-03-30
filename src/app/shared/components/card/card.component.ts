import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() headingText!: string;
  @Input() iconUrl!: string;
  @Input() paragraphText!: string;
}
