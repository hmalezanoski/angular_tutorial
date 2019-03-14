import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {StaticPagesModule} from './static-pages/static-pages.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: './static-pages/static-pages.module#StaticPagesModule'
    },
    {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
