@Component({
  selector: 'app-dropdown-menu-radio',
  templateUrl: './dropdown-menu-radio.component.html',
  styleUrls: ['./dropdown-menu-radio.component.css'],
})
export class DropdownMenuRadioComponent {}

import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// @Component({
//   selector: 'app-dropdown-menu-radio-group',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div role="radiogroup" [attr.aria-labelledby]="labelledBy">
//       <ng-content></ng-content>
//     </div>
//   `,
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => DropdownMenuRadioGroupComponent),
//       multi: true,
//     },
//   ],
// })
// export class DropdownMenuRadioGroupComponent implements ControlValueAccessor {
//   @Input() labelledBy?: string;
//   @Output() valueChange = new EventEmitter<any>();

//   value: any = null;
//   private onChange = (value: any) => {};
//   private onTouched = () => {};

//   setValue(value: any): void {
//     this.value = value;
//     this.onChange(value);
//     this.onTouched();
//     this.valueChange.emit(value);
//   }

//   // ControlValueAccessor implementation
//   writeValue(value: any): void {
//     this.value = value;
//   }

//   registerOnChange(fn: (value: any) => void): void {
//     this.onChange = fn;
//   }

//   registerOnTouched(fn: () => void): void {
//     this.onTouched = fn;
//   }
// }
@Component({
  selector: 'app-dropdown-menu-radio',
  templateUrl: './dropdown-menu-radio.component.html',
  styleUrls: ['./dropdown-menu-radio.component.css'],
})
export class DropdownMenuRadioItemComponent {
  // @Input() value: any;
  // @Input() disabled = false;
  // // @Input() radioGroup?: DropdownMenuRadioGroupComponent;
  // get checked(): boolean {
  //   return this.radioGroup?.value === this.value;
  // }
  // select(): void {
  //   if (this.disabled) return;
  //   this.radioGroup?.setValue(this.value);
  // }
  // onKeydown(event: KeyboardEvent): void {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault();
  //     this.select();
  //   }
  // }
}
