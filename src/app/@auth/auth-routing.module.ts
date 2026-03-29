import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: SignInComponent,
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
