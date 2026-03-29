import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './@components/page-not-found/page-not-found.component';
import { UnauthorizedPageComponent } from './@components/unauthorized-page/unauthorized-page.component';
import { authGuard } from './@core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/@auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('src/app/@components/webapp/webapp.module').then(
        (m) => m.WebAppModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: 'unauthorized-page',
    component: UnauthorizedPageComponent,
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
