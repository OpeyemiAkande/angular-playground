import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  outlineStyle: string = '';

  @Input() text!: string;
  @Input() buttonColor?: string;
  @Input() bgColor?: string = 'bg-primary-500';
  @Input() textColor?: string = 'text-white';
  @Input() rounded?: boolean;
  @Input() size?: string = 'md';
  @Input() block?: boolean = false;
  @Input() outline?: boolean = false;
  @Input() outlineColor?: string = '';
  @Input() hoverColor?: string;
  @Input() btnType?: string = 'button';
  @Input() actionUrl?: string;
  @Input() disabled?: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.outline && this.outlineColor) {
      this.outlineStyle = `border-${this.outlineColor} border-solid border text-${this.outlineColor} bg-transparent`;
      console.log(this.outlineStyle);
    }
  }

  getButtonColor() {
    return this.buttonColor || 'bg-primary';
  }

  onClick() {
    if (this.actionUrl) {
      this.router.navigate([this.actionUrl]);
    }
  }
}
