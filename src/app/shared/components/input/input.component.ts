import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() id!: string;
  @Input() inputType?: string = 'text';
  @Input() label?: string;
  @Input() placeholder?: string = 'Your input goes here'
  @Input() disabled?: boolean = false;
}
