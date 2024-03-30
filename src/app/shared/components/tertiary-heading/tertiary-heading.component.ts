import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tertiary-heading',
  templateUrl: './tertiary-heading.component.html',
  styleUrls: ['./tertiary-heading.component.css']
})
export class TertiaryHeadingComponent {
  @Input() title!: string;
  @Input() centered: boolean = false;
  @Input() textColor?: string;

  getTextColor(): string {
    return this.textColor ? this.textColor : 'text-t-black-1';
  }

}
