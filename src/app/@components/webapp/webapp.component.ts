import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { webappRouteAnimations } from 'src/app/@core/animations/route.animations';

@Component({
  selector: 'app-webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.css'],
  animations: [webappRouteAnimations],
})
export class WebappComponent implements AfterViewInit {
  animationState: string;
  sidebarVisible: boolean = false;
  @ViewChild('mainContent', { static: true }) mainContent: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationState = "Route(url:'', path:'')";
    }, 0);
  }

  onShowSidebar(event: any) {
    console.log(event);
    this.sidebarVisible = !this.sidebarVisible;
  }

  onRouterActivate(event: any) {
    (this.mainContent?.nativeElement as HTMLElement)?.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }
}
