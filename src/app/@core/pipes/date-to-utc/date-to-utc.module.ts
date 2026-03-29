import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateToUtcPipe } from './date-to-utc.pipe';

@NgModule({
  declarations: [DateToUtcPipe],
  imports: [CommonModule],
  exports: [DateToUtcPipe],
})
export class DateToUtcModule {}
