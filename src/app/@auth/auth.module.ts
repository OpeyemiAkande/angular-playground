import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../@core/shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from '../@core/shared/components/ui/accordion/accordion.module';
import { DropdownsModule } from '../@core/shared/components/ui/dropdowns/dropdowns.module';

const components = [SignInComponent, ForgotPasswordComponent];

@NgModule({
  declarations: [components],
  providers: [MessageService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
    AccordionModule,
    DropdownsModule,
    ToastModule,
  ],
})
export class AuthModule {}
