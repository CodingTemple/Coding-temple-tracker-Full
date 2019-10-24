import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import for Shared Module
import { SharedModule } from '../shared/shared.module';

// Import for Reactive Forms Module
import { ReactiveFormsModule } from '@angular/forms';

// Import for User-Routing Module
import { UserRoutingModule } from './user-routing/user-routing.module';

// Import for Login Page Component
import { LoginPageComponent } from './login-page/login-page.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { GoogleSigninDirective } from './google-signin.directive';

@NgModule({
  declarations: [LoginPageComponent, EmailLoginComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
