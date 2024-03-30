import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tertiary-paragraph',
  templateUrl: './tertiary-paragraph.component.html',
  styleUrls: ['./tertiary-paragraph.component.css']
})
export class TertiaryParagraphComponent {
  @Input() text!: string;
  @Input() textColor?: string;

  getTextColor(): string {
    return this.textColor ? this.textColor : 'text-t-black-1';
  }
}
