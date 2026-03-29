import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebappRoutingModule } from './webapp-routing.module';
import { BookManagementComponent } from './book-management/book-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebappComponent } from './webapp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarBreadcrumbComponent } from './navbar/navbar-breadcrumb/navbar-breadcrumb.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/@core/pipes/pipes.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

const components = [
  BookManagementComponent,
  DashboardComponent,
  UserManagementComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    WebappRoutingModule,
    SidebarModule,
    ButtonModule,
    PipesModule,
    ToastModule,
  ],
  exports: [],
  providers: [MessageService],
  declarations: [
    SidebarComponent,
    WebappComponent,
    NavbarComponent,
    NavbarBreadcrumbComponent,
  ],
})
export class WebAppModule {}
