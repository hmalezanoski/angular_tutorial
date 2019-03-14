import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {StaticPagesModule} from './static-pages/static-pages.module';
import { LayoutStaicPageComponent } from './layouts/layout-staic-page/layout-staic-page.component';
import { LayoutAutheticationComponent } from './layouts/layout-authetication/layout-authetication.component';
import { LayoutDashboardComponent } from './layouts/layout-dashboard/layout-dashboard.component';
import {NavStaticComponent} from './static-pages/nav-static/nav-static.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutStaicPageComponent,
        LayoutAutheticationComponent,
        LayoutDashboardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthenticationModule,
        StaticPagesModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
