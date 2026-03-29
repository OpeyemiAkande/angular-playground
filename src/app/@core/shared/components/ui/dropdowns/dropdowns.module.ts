import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownMenuCheckboxComponent } from './dropdown-menu-checkbox/dropdown-menu-checkbox.component';
import { DropdownMenuRadioComponent } from './dropdown-menu-radio/dropdown-menu-radio.component';

@NgModule({
  declarations: [
    DropdownMenuComponent,
    DropdownMenuCheckboxComponent,
    DropdownMenuRadioComponent,
  ],
  imports: [CommonModule],
  exports: [
    DropdownMenuComponent,
    DropdownMenuCheckboxComponent,
    DropdownMenuRadioComponent,
  ],
})
export class DropdownsModule {}
