import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-heading',
  templateUrl: './secondary-heading.component.html',
  styleUrls: ['./secondary-heading.component.css']
})
export class SecondaryHeadingComponent {
  @Input() title!: string;
  @Input() highlightedText?: string;
  @Input() centered: boolean = false;
  @Input() textColor?: string;
  @Input() weight?: string = 'bold'

  getTextColor(): string {
    return this.textColor ? this.textColor : 'text-t-black-1';
  }

  ngOnInit() {
    // console.log(this.colorWhite)
  }
}
