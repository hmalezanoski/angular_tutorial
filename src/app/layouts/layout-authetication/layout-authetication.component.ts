import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout-authetication',
    templateUrl: './layout-authetication.component.html',
    styleUrls: ['./layout-authetication.component.scss']
})
export class LayoutAutheticationComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onLogoClick() {
        this.router.navigate(['/']);
    }

}
