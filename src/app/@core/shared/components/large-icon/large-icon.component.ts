import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-icon',
  templateUrl: './large-icon.component.html',
  styleUrls: ['./large-icon.component.css']
})
export class LargeIconComponent {
  @Input() iconUrl!: string;
  @Input() backgroundColor?: string;
  @Input() navUrl?: string;

  getBackgroundColor(): string {
    return this.backgroundColor ? this.backgroundColor : 'bg-white';
  }
}
