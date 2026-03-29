import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappComponent } from './webapp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-management',
    pathMatch: 'full',
  },
  {
    path: '',
    component: WebappComponent,
    children: [
      {
        path: 'dashboard',
        data: { breadcrumb: 'Dashboard' },
        loadChildren: () =>
          import('src/app/@components/webapp/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'book-management',
        data: { breadcrumb: 'Book Management' },
        loadChildren: () =>
          import(
            'src/app/@components/webapp/book-management/book-management.module'
          ).then((m) => m.BookManagementModule),
      },
      {
        path: 'user-management',
        data: { breadcrumb: 'User Management' },
        loadChildren: () =>
          import(
            'src/app/@components/webapp/user-management/user-management.module'
          ).then((m) => m.UserManagementModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebappRoutingModule {}
