import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './static-pages/home/home.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {ResetPasswordComponent} from './authentication/reset-password/reset-password.component';
import {PageNotFoundComponent} from './static-pages/page-not-found/page-not-found.component';
import {AboutUsComponent} from './static-pages/about-us/about-us.component';
import {ServicesComponent} from './static-pages/services/services.component';
import {LayoutStaicPageComponent} from './layouts/layout-staic-page/layout-staic-page.component';
import {LayoutAutheticationComponent} from './layouts/layout-authetication/layout-authetication.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutStaicPageComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutUsComponent },
            { path: 'services', component: ServicesComponent}
            ]
    },
    {
        path: '',
        component: LayoutAutheticationComponent,
        children: [
            {path: 'login', component: LoginComponent },
            {path: 'register', component: RegisterComponent },
            {path: 'reset-password', component: ResetPasswordComponent },
        ]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
