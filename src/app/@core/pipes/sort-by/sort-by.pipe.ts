import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(array: any[], field: string, reverse: boolean = false): any[] {
    if (!Array.isArray(array) || array.length <= 1) {
      return array;
    }

    array.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue < bValue) {
        return reverse ? 1 : -1;
      } else if (aValue > bValue) {
        return reverse ? -1 : 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
