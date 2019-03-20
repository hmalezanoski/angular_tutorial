import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { AuthenticationService} from '../core/services/authentication/authentication.service';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
        ResetCodeComponent
    ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule {
}
