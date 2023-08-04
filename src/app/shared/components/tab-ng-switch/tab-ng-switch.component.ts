import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ng-switch',
  templateUrl: './tab-ng-switch.component.html',
  styleUrls: ['./tab-ng-switch.component.scss']
})
export class TabNgSwitchComponent implements OnInit {
  public price: string = '5';
  public prices: string = '5';
  public framePrices: string = '5';

  constructor() { }

  ngOnInit(): void {
  }

}
