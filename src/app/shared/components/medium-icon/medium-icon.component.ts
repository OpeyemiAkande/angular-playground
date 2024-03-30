import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-icon',
  templateUrl: './medium-icon.component.html',
  styleUrls: ['./medium-icon.component.css']
})
export class MediumIconComponent {
  @Input() iconUrl!: string;
  @Input() backgroundColor?: string;
  @Input() navUrl?: string;

  getBackgroundColor(): string {
    return this.backgroundColor ? this.backgroundColor : 'bg-white';
  }
}
