import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavStaticComponent } from './nav-static/nav-static.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';

@NgModule({

  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ],
    declarations: [
        HomeComponent,
        NavStaticComponent,
        PageNotFoundComponent,
        AboutUsComponent,
        ServicesComponent
    ]
})
export class StaticPagesModule { }
