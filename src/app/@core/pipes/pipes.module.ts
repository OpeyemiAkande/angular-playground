import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from './capitalizeFirst/capitalize-first.pipe';
import { DateToUtcModule } from './date-to-utc/date-to-utc.module';
import { SortByModule } from './sort-by/sort-by.module';
import { DateAgoModule } from './date-ago/date-ago.module';

@NgModule({
  imports: [CommonModule, DateToUtcModule, SortByModule, DateAgoModule],
  declarations: [CapitalizeFirstPipe],
  exports: [CapitalizeFirstPipe],
})
export class PipesModule {}
