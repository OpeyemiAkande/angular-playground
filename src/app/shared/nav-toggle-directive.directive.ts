import {
  Directive,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appNavToggleDirective]',
})
export class NavToggleDirectiveDirective implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // isToggled = false;

  ngAfterViewInit(): void {
    this.renderer.listen(this.elRef.nativeElement, 'click', (event) => {
      const parentNode = this.renderer.parentNode(this.elRef.nativeElement);

      if (!parentNode.classList.contains('nav-list')) {
        parentNode.querySelector('.nav-list').classList.toggle('nav-open');
        console.log('object')
      } else {
        parentNode.classList.toggle('nav-open');
      }
    });
  }
}
