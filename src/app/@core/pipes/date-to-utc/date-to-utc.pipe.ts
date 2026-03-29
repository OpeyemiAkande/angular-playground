import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToUtc',
})
export class DateToUtcPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    // Check if the value is a valid date string
    if (isNaN(Date.parse(value))) {
      return value;
    }

    // Check if 'Z' is already present
    if (value.endsWith('Z')) {
      return value;
    }

    // Add 'Z' to the end of the date string
    return value + 'Z';
  }
}
