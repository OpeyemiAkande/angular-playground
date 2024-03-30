import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-paragraph',
  templateUrl: './primary-paragraph.component.html',
  styleUrls: ['./primary-paragraph.component.css']
})
export class PrimaryParagraphComponent {
  @Input() text!: string;
  @Input() textColor?: string;

  getTextColor(): string {
    return this.textColor ? this.textColor : 'text-t-black-1';
  }
}
