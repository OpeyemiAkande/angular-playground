import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarBreadcrumbService } from 'src/app/@core/services/navbar-breadcrumb.service';

@Component({
  selector: 'app-navbar-breadcrumb',
  templateUrl: './navbar-breadcrumb.component.html',
  styleUrls: ['./navbar-breadcrumb.component.css'],
})
export class NavbarBreadcrumbComponent {
  breadcrumbLoadedData!: any;

  private subscription: Subscription = new Subscription();

  constructor(
    private readonly navbarBreadcrumbService: NavbarBreadcrumbService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.navbarBreadcrumbService.breadcrumbs$.subscribe((resData) => {
        this.breadcrumbLoadedData = [
          ...new Map(resData.map((m) => [m?.breadcrumb, m])).values(), //Remove duplicates
        ];

        this.breadcrumbLoadedData = this.breadcrumbLoadedData.filter(
          (resData: any) => resData?.breadcrumb !== 'Webapp'
        );
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
