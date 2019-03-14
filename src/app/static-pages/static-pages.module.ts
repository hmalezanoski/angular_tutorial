import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({

  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ],
    declarations: [
        HomeComponent
    ]
})
export class StaticPagesModule { }
