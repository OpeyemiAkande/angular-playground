import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() inputId: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';

  ngOnInit(): void {
    console.log(this.label);
  }

  errorMessage(error: ValidationErrors) {
    console.log(error);
    if (error['required']) {
      return 'This field is required';
    } else if (error['email']) {
      return 'Enter a valid email address';
    } else if (error['uppercase']) {
      return 'Enter at least 1 uppercase character';
    } else if (error['lowercase']) {
      return 'Enter at least 1 lowercase character';
    } else if (error['number']) {
      return 'Enter at least 1 number';
    } else if (error['specialCharacter']) {
      return 'Enter at least 1 special character';
    } else {
      return 'Password must be at least 8 characters long';
    }
  }
}
