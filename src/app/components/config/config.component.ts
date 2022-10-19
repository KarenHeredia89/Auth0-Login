import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: [
  ]
})
export class ConfigComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

}