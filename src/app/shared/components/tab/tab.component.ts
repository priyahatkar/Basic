import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  frameWork : string = "angular";
  frameWorkName : string = "html"
  constructor() { }

  ngOnInit(): void {
  }
  
  onTabClick(eve :Event){
    // console.log(eve)
    let target = eve.target as HTMLAnchorElement;
    let val = target.getAttribute("data-id")!;
    // console.log(val)
    this.frameWork = val;
    console.log(val)
  }
}
