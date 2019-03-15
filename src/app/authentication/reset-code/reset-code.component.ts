import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.scss']
})
export class ResetCodeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

    onResendCoteClick() {

    }

    onSumbitClick() {
    this.route.navigate(['/reset-password']);
    }
}
