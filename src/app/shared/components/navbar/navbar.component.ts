import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('mobileNavBtn') navBtn!: ElementRef;

  constructor(private renderer: Renderer2) { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // const target = event.target as Window;
    const window = event.currentTarget;
    // console.log(window.scrollY);

    if (window.scrollY > this.nav.nativeElement.offsetHeight + 150) {
      this.nav.nativeElement.classList.add('active');
      // console.log(this.nav.nativeElement.classList);
    } else {
      this.nav.nativeElement.classList.remove('active');
    }
  }
}
