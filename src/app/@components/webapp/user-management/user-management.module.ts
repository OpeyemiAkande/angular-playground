import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
  },
];
const components = [UserManagementComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementModule {}
