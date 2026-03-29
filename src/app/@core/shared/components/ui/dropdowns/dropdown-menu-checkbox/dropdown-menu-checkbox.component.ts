import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown-menu-checkbox',
  templateUrl: './dropdown-menu-checkbox.component.html',
  styleUrls: ['./dropdown-menu-checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownMenuCheckboxComponent),
      multi: true,
    },
  ],
})
export class DropdownMenuCheckboxComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  checked = false;
  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  toggle(): void {
    if (this.disabled) return;

    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.checkedChange.emit(this.checked);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
