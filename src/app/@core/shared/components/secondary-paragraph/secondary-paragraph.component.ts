import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-paragraph',
  templateUrl: './secondary-paragraph.component.html',
  styleUrls: ['./secondary-paragraph.component.css'],
})
export class SecondaryParagraphComponent {
  @Input() text!: string;
  @Input() textColor: string;
}
