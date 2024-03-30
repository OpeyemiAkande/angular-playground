import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() buttonColor?: string;
  @Input() buttonType?: string;
  @Input() iconLabel?: string;

  getButtonType() {
    if (this.buttonType === 'icon') return 'button'
    return this.buttonType || 'button'
  }

  getButtonColor() {
    return this.buttonColor || 'bg-t-blue-1'
  }
}
