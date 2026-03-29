import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoScrollInput]'
})
export class NoScrollInputDirective {

  constructor() { }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    event.preventDefault();
  }
}
