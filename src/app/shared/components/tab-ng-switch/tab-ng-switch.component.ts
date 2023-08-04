import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ng-switch',
  templateUrl: './tab-ng-switch.component.html',
  styleUrls: ['./tab-ng-switch.component.scss']
})
export class TabNgSwitchComponent implements OnInit {
  price: string = '5';
  prices: string = '5';
  constructor() { }

  ngOnInit(): void {
  }

}
