import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appObserveSection]',
})
export class ObserveSectionDirective {
  // @ViewChildren('section') components: QueryList<ElementRef>;
  sections!: NodeList;

  constructor(private app: ElementRef) { }

  ngAfterViewInit() {
    // print array of CustomComponent objects
    this.sections = this.app.nativeElement.querySelectorAll('.section');
    // console.log(this.sections);
    console.log(window.scrollX);

    this.sections.forEach((section: any) => {
      this.sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  }

  revealSection = function (entries: any, observer: any) {
    const [entry] = entries;
    const heroImg = entry.target.querySelector('.slide-in');
    // console.log(entry);

    // if (entry.intersectionRatio.toFixed(2) >= 0.15)
    //   entry.target.classList.remove("section--hidden");
    // else entry.target.classList.add("section--hidden");
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    heroImg.classList.add('active');
    console.log(entry.target);
    observer.unobserve(entry.target);
  };

  sectionObserver = new IntersectionObserver(this.revealSection, {
    root: null,
    threshold: 0.15,
  });
}
