import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { ResetComponent } from './reset/reset.component';



@NgModule({
    imports: [
        CommonModule,
        AuthenticationRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetComponent
    ]
})
export class AuthenticationModule {
}
