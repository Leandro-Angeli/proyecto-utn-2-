import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environment as prodVars } from 'src/environments/environment.prod';
console.log('let from environment', environment);
console.log('let from development', prodVars);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
