import { Component, OnInit } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { environment as prodVars } from 'src/environments/environment.prod';
// environment ? console.log('let from environment', environment) : null;
// prodVars ? console.log('let from development', prodVars) : null;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
