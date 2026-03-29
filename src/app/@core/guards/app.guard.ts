import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppGuard
  implements CanActivate, CanActivateChild, CanLoad, OnDestroy
{
  userPermissions: string[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.checkChildRoutes(childRoute, state)) {
      return true;
    } else {
      this.router.navigate(['/unauthorized-page']);
      return false;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true; // Modify according to your actual condition
  }

  private checkChildRoutes(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    /************************** Dashboard ***************************/
    if (
      state.url === '/app/dashboard' &&
      !this.checkForPermissions(route.data['permissions'])
    ) {
      return false; // Not authorized
    } else {
      return true;
    }
  }

  private checkForPermissions(permissions: string[]): boolean {
    if (permissions && permissions.length > 0) {
      return permissions.every((permission) => {
        return this.userPermissions.includes(permission);
      });
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
