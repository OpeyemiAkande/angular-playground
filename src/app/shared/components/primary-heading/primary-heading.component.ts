import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-heading',
  templateUrl: './primary-heading.component.html',
  styleUrls: ['./primary-heading.component.css']
})
export class PrimaryHeadingComponent {
  @Input() title!: string;
  @Input() highlightedText?: string;
  @Input() centered: boolean = false;
  @Input() textColor?: string;

  getTextColor(): string {
    return this.textColor ? this.textColor : 'text-t-black-1';
  }

  ngOninit() {
    console.log(this.highlightedText)
  }
}
