import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-icon',
  templateUrl: './small-icon.component.html',
  styleUrls: ['./small-icon.component.css']
})
export class SmallIconComponent {
  @Input() iconUrl!: string;
  @Input() backgroundColor?: string;
  @Input() navUrl?: string;

  getBackgroundColor(): string {
    return this.backgroundColor ? this.backgroundColor : 'bg-white';
  }
}
